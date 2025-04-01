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
    "43BP9VKtc86w2UdBB9zs1WHpVa1tGsof4rcZxoK9Dcf5HJnCAuKrst2h8FRAHfYEXBPaCbH8PmgNajC5DrzecCq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f64pYTxvcBNhbbSD84iNFdMgfuMKx8iHnkFUjCHTq49cbNkHQ7izyFkWTU9a3axY52qx79F1hdnJt7ZznEpmwpm",
  "key1": "34h4f5Ec6nYTui3nF6xhRHk12NUzy2Y5ACbZzVqjHZnb3Pd29DMZ3GuJaNjv3NDmq7UKkBdkWGPrvgHS344C2fnx",
  "key2": "2zVjwPEqsAccd8LMqKuh5CrFf9XWqdLMueQ4t2quKmZMedVcQUeRJa945s4t85TPHbbAYzFSoDUtZ7oDWboeKMse",
  "key3": "xySz3dUDDnzMTsgQnaasW6kbnmWS8vwkKfqoyyRjRUasqkJQwXUZK56pM8CHWkhPPmz4naG2BEGhgKyrV7C4ddy",
  "key4": "FfXHgSitPFtNNBGaqrM1Q9XoLf6VsvhCteGoNdZ9CAccw6zbH5hZkSja9Aj1U3rdZiqmD6TbaMaESSrLmHgr4aD",
  "key5": "3dsbmt6AFvHVRcGNZByEb7CnJobnEGuoxzcuTnpBoHLSMb8Ec65ZZymXprNKhSyAbLhzqef4wSrh13AEmNUip71T",
  "key6": "5hoHjVGxmnBqPUMhcZNzjDiH7xjMYKKFUhTdnvAHRSYBpkmAjUXSNX6K7TCxbEPYZwbYrKVSCFtKo9aMNvrx4Z3f",
  "key7": "frww2jLeJBwJyRrhKzpmVQSja2aVDRY3erMK3BPYCg4ijroTwbG9WisgZyFc1RZf9E39YWbyANuL7AySkguyJid",
  "key8": "4eo1vnKR1iAsAd4ZtUZK5AuEC1tNfhope848jnGjmQSDFDyQarVsMbWijB37TGUK89ApdT35ZS8mu45BdPnhxo7h",
  "key9": "4wW6573AQx4A8q3smAACVJYhNGmMAAeUuDLgFdKontqxm2px9GRJtSD3UnR45uLw9h5LJKvzfo56mifu87KhqdvW",
  "key10": "kgPj7S88WkCm3rzUuBAXg9atkuL192km9Pua3ka4HhcRtXcfCwirKtcNz6MBJ4JFBUmSYSX7oQovssZixTg93x9",
  "key11": "532J3gyszrkgcNPyfcYKXmSHQxJqZ5KGbNX3KjrfHGefHduDFCqcqKaSbudPNFrTFDNDid1Hpsn128PHneGnnto8",
  "key12": "2cWK6ZSEAQQrUvbGRWP6N3WN4Na6RfTk7aRfLQG5VKpRnzsMsDYq5NLcHnC5oX4CkBdxvMFHtuN6ztaNHDgL4YGF",
  "key13": "3NqB4Eo37nBERQiKoZ4rDdmX3PqdhzbE9ao5SJ2v389PmojzfdqqrLmh9GfnRBfnDWdMuNf1pMyd41nddP5yT4Xv",
  "key14": "5RYRFXbKLRUQWZmAYi4KjDyryqh6rDGQ8DKuQF2GpMpxuB5CZnr14czW7ERSQ36sXW8KUxC5bipWT3wcs6k35ebi",
  "key15": "2nvWzT6dJ4j5xj6Vt2SMmruUCdhiozxzqwG1A3LPxSug9igQGCNaxiLSTi1aRCoxLt6Ey6H51MkiEwSfFGJTQVdT",
  "key16": "t3DyT6fJrdrUuJYz7prA1XRFkfdVSKumEBmybqNSqKFm9fZrWYu6SfoyCJWhRs5a21q6pKfX3AK6zyXV4AWfpne",
  "key17": "New3T3eVFAtJcVuinJ1Lmq7fVgR2WmMmCv1sgvXEW6oKicMWYBRz1iNj2niytJCSsMDSXzz4zkHG9yU4eYFi3bs",
  "key18": "DFpeXymzxe9ubgdAzGQY1fjK9HfNpKSnGHyeSymiVyyTo1RKRuBu1gKFfLgjFHcJBQRXhC79cvQJEYonL3UCvbd",
  "key19": "5y1DfXpK74dSqECBFxhm41TDuoGeqRyc5RW37uw7nBhURkcWUDJSzTwKQjg415ihhzF8Qb2txUuDvSqNB7MokQXv",
  "key20": "51c21JmMGQ8S2bveQRY8CfQyttt6NqMnBUGCbsW6fJw7yjggawqJU4PAKXTpkxgRhkuYtQBrxEvccrhy2Y4u6bz7",
  "key21": "cXMMvKJxMa4VTKX5sqk9xQMTBZrp8dU6swrNSSLoZfCxQCYmeyeTZPDAPdanz3N7RpyjX4WJJgQe5uer8DpcKEa",
  "key22": "5JzjqNAkdtR9FaUqjGJ8dEkz9n8tzNpLg24ThhTf6GdBnXGTa2DDQJvn4p7HQa1cgqxfF3TM6sdEmnjE6kFsukQQ",
  "key23": "61YjP1q81Dh6WZncoGVTpduurGBftbpFEsiefdUGjjwHt1LypD5NTYfVJUX5Q64wnDVXZqmVFhQubByNeyXnMAtk",
  "key24": "4koY3qj2WPjRNtenDzBbpgSaTrKyfiswGakquNEhqeLu1dSs8RT1YByJbjmuSvMKatadL9Bbg2cRK6SkbHEhWqXj",
  "key25": "65DNe5pVtzAGDzUiQk6jDSUyPmDHkBxGRKUCb36ZStztqbMyGKMgd9LvKP8HCti7MMiFXQmWqQ2Mpgz8Sv1pHzPC",
  "key26": "2z7zMUYBZiu2YFZpEoPXFb6XydEgh9xDbBLUHD2RE2tDNMHrQEsZbDkF6zQLhWT7wHW2wyLMKfzaB1cXTxKWradn",
  "key27": "Y5C8eppweLH87HErpMBMY5br6j3dELJWZLAhXzr1xeYA1qN94gSvfMhiSknj3LHNxbacciBUQsDsDT5sWDtmg1e"
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
