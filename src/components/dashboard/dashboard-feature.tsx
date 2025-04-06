/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2DNotQF57JXwyynwx4E8XnSd274NtFJfuBjHb1VnvJnv5XJxPxgacJN6iCVSMBCCR2BAzw4TypTyh8SiA6mXFBPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhA8d2o7Tm8daZAAZLTCbUL6KGVEJ71qqxudrHjYKnPifTGA5xVjWr31ijcnN983qx6TCMA52THynkocw5M38Fb",
  "key1": "3ScqfTrR6rpb7WvDzAETt56vKzihVR9zNMBhwCbNh3DCCJ1YnPFtcUkBE3WjdPN3BQfmNDiMgG9j9SH2aCK2QVFp",
  "key2": "2QpTBTHb9DEjaPozn4wSFjq3KqtYiet6ex6NGCQQG7h6dkBj7CDkMTrALqAgYzDxgKGExVbpK7N8v3sz1vLvMShH",
  "key3": "584vN1Vfr5yUybtx4CbfRSZkgLaRdJJriRc6mFmhsUacapzAAyU32U7PBvNu5peNxjUTD9j2Dooz4wFdMRphF2hr",
  "key4": "9NvZ6dDHCcAMCfdEQj7Fo76akfKfKG49xi4iMJ9YhiDjQGScadfiUU7B4nVPJfQcAganGAWzgjKkQpfPMChfM39",
  "key5": "5WErqwpBMaQExEiGpaXyKQRwJiKSPLGhqVHiS88hw7qQ8UREHdKDG8eERpGEYKC1owzJUMDLqoJgmPQBkgoqfVan",
  "key6": "5qscn143gmGu3GfPfSgMb44YFhSSH4VF9HG6722p6yqfRBcrqGCYG2TpaETLUcp5y1gk3VgMdsTTcFa7rbycT4Gz",
  "key7": "57RjVNRAaB44TVDRDxDnX7nVZfm3ZERF9Na2xyHaXXMR5yvG3zojPmBDkpmw3o7WNTSRu6Qskg51ZJ4yKeHPEoCa",
  "key8": "5Jye1MbfdtUastm9JFL7uTabKYro6ZJSTDR1BL7aQ1azdMKubjEcPRvEAQ5tMNNubobwvptfaEvso7aYvMtbMmw1",
  "key9": "2xDPFejVu622WAjr9L73KbdL6Bmpnh1QT8nRbhWTbaT6h3QaRkQbP6TWQoCW5hhNPTcVWWb2jXRxoaPi4JmoxxTP",
  "key10": "5e4hsQgWmdepPvdjiNRkgVD8SxoQ27ZivSfcgkKED5c6chV81vtoFJY1Udx2uo2GLWKckzL8aePu8bT7D3w9T7N3",
  "key11": "4PDBfZKsuiRhDmzDEmxwWwLbNBVBZ9JivfSAfNG3Cx8t8LvKPo2cgf63ym3mkjLtcptYemy6oKxS8MSxfmqfA3GS",
  "key12": "JvvVSeShPw5Mhsirbqh1g1bVVPAvjBCLmxtrC8KY7pTvWKGsKhvFnjdFA8aXCLhPuCyiMt4yRV9sdmzBxz3vuEG",
  "key13": "22y8yqys7xzbSeN4Sb2PHwmbA61pE48F713gGJ2UMX4oZzc1AtKRmzxpREUuHhciv8YKLQwmh7DV5GMe94n3j28E",
  "key14": "3fJFh7Xi9Qk6GbcXGtV6DXB8RhAPKP1VEoKWEorXKoxyW9EitcY9mBydmRrr1DuvH455wqSCo6V8no6bEvKCranV",
  "key15": "4HEcJtidwnwr6FoG7SkzRAoKQEbJzwoaP1dxXoUu4tKPRLKtQxMDN76hX43rtbdkZHob1gffGhFFXNJEPeMmkVi9",
  "key16": "326dn1NSC5jp6kSLaAf5Tks3XjKF8hdNAFSs4sKThEjjWJxHx8rAiQfABxuQUW4o8M3F68jVa8LNUPVzYJbteb9L",
  "key17": "YgxRjeTzzaTYx3fYBM2UuCygPgs4zHemKrppxUD3d4h9E78r7D3oNjYhNzvyxvTuu967BpE6hjbdJpewCakcszw",
  "key18": "3P5HmvQW4ACMq2zKSV1iyisWiQPsuPNciAPYpKPRxMRefJCKjkqDQxLDRo4q6ZEwDLfFVZLPRmokHdWtAy2noysD",
  "key19": "4tuVk5swijxYt1SEofixdYsVSN9wWkUNtuki4AjGAyMJCXqnJ8V5bnD71akQo2Y1MFTxF1PdcjXiMgXVofQZFwJw",
  "key20": "34QshBmXgM1WhXKPiYZcTYmi2Zrb4gUFKxVK6ZDYTaxaaJKj9emjvNy1VWbGKEAsviSvHEGNLXNfEAJ1QQyQSogC",
  "key21": "3E6vUyx8scBYwbnLrj5BnVqHhpzbgTMi4PFe7ApZBzPM4kE8UAYbqTsRQqteEB9ETBUGuRaytnvL9FfJpGF9n1fh",
  "key22": "3ijFaihufJfsstQ3Wi2mmR71L5Ujye3Bo5J2GfCKXpszJME3VCV4uvAAkkg97cEsKcZc7kAPrW49wwzSv5v6tLtT",
  "key23": "45TP4jWeHqehPqqhfiF6GN1zwhSyeTsnkqVBDvayvqVutU3KanV2PnG7ChrGPKCHeU4nkvQ2Aw2DmyzzF9gHa2QJ",
  "key24": "3mCDaEfzGWwb9V39AEEZwAHeCsQdRSwV6nCNPE6SEv2iqJXDwSUJDuUq4jGX86cBsRb5W3WgxKRh8uH4t2pZMeJh",
  "key25": "5ERjUheYX9LM5xaTVRAjLfXzqAArBhbtMCfPAWXuEWtv7V4so5RU1GT6pKfrSwip2wTuf8Xq2EXFtFHFuSx4Ut7B",
  "key26": "31eCfZkzGfq5xzsRzNZfouv1NpinPHCqDbpB8dsdb4aQyyYkQSzUFD5Gn2shy47ryMYyqTPuUzvBrAwAp4JHCrY1",
  "key27": "RXukXej29hqMTufnjZtz15x7uUH8qScUv9oNzTC4ciNDzkNTnEbycEYJCfHKHs3dFxASWY1yUbtZqvL7NrV3K1H"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
