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
    "435RbDKxtFGbXgf6guaK1c38jHGTfPHMYtHe8wn3dPHQ8CaCn86EkSUfnrTzVMgrFSmR745RudGwJ3c5aXKyjRsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBrXAbY6yL2m6Nqsqx6Aivo85Wbm7D8yPoMc6jGPRRLJXos83J1dMuBEAtR5CJe3Bjv2B1mJiwu67ZEiTUaaxRt",
  "key1": "4z57ewYj7GkuFM8ZkbbuxfhZKTN3ASf8z6mx5DQAyg1faZDj8ZUdrW9MGE5emrf6iB2zgUWCbvkj6dcKVFzh5b8D",
  "key2": "NW9F1HhjyQaKgh1mErxMu5Sgk9M9nd73YjYTtaUZzhuBi4SdBHHTmvhMPKAFUsULYdAgNVov8hkk2oCmisHHB6P",
  "key3": "2vpicMKUbfxbcsB8pnXP9vGSg9T4BrKnVnELDWUWk2Updm5kRK4LLw4xemNheRqzMwatP5L4uHcKFx1688vdZARU",
  "key4": "aQb15K2rwj7q99KoKAEBRtesCXcTbwFoyGozhQf5pt9XBnSgVEH2kiTDkYyLonZV6n3ohZPj9avBpZimZvJwdPf",
  "key5": "3iXaZAtHStyVU4GbnD4yCQKZPLc7MFbZ7VvnqhUmWEjeu2tzn6bcPmToT1zP78a6iByqw1RNXEgyvbEH6MSu2V17",
  "key6": "2w6bm5MsjLGJYjAMr8bbwiAtDe6AJZbqEVh1dkxaVob1iPSZMTB36wf7eL3aRpvkdck45vRY1JGve9hZSFNu61uK",
  "key7": "Dxhp6fpDrGtaTEVnF9jZNhfFfhSDMWMSaeUrjha3T5hcTmpMP4LQ9eeEjhETVuHbYj7xKoKMjNfdxSTUoE4KhUE",
  "key8": "46mq2fJnuERiSGkNeXXu1TRipt8rCTBUvEkyT1xprKBDfFp4kNYAajA9Jp8QJnGYBBNpJiKteWsqCPr4Nh1fgAjv",
  "key9": "2HnuEWAGqUBhbALe87MuNxYQXUtHCK357CSkzHYb2eBYeDGZrJfBGkqwoJZeQmVxYby25qnd3JpKa8vi62rBLFzd",
  "key10": "3wWBCySR1DfH2swKv3nvNBbdhhqLNauwFqXEwr9C4BN2fbJVH7Q4DZcfpC2KAjbe64GjTQvubAX2JHwQd2QCBo8j",
  "key11": "2F8bL7krQbXKW4WFYvcgBxzSdUZgvsv71Dvm54mAFWKFMZyRekeeC3o9yRNvWZupwNvRaHMXTYungggLf4HAvSRs",
  "key12": "TvrnifeCSEqmy91zTAS9HNUAK31gusJqUfTPJBrNqqHdSTgqzEebJPvrBHaLp5TQpA8RdbewwB5wpV1yz7ComrS",
  "key13": "3LHJgAVTib1uraGkGwaYNeqyRv9xr5Yd33cWnbCVauNQLBWZFBpdNaU1MA369dodW5uomNDfCANhK75XmGrRxj8L",
  "key14": "3dWksMHFtNLWE7np4HpJK4Vt21RHZz49cBgPYNJKw9DgV8s5vbwSP9Mm4ongM6NkqxP1NH5uzeUThkgEXp9bDqUY",
  "key15": "5BMPa5SyBKSNfvcUZxMZjvQrNF7u5bdwLpZiPqiWo8pByxroHB2Wp6EnnfMAK3xGJqdEfgvkRYfx1mtUvq5LcqYj",
  "key16": "21mtkKmEHRqPVfXs73YVa6hWHCzozx5TcwFVtmz4jvEYscFe6SkDCJo9fjCyVNP9THd7hcTWbX9GCkWiTHSLvBhj",
  "key17": "4coSGqZpd4oSW9bdRNfppxy8MQfrozfGNpsryrMtSiA2ykRnaLPxnNtPiSJeu4S5CLC1FKobj65T8Ljzm7m8ZyWK",
  "key18": "62QCb6MzkC3mepmWb9SuqWsDzdT5UKS5rJaf5iSRyinpvUxVqecNX6ndSq7jGG4gXPZekkhUuwUvFojboZp66Wqo",
  "key19": "57tVXycQrbtLYd5Tdn1Xo9UEXnvVyipb5H9wUidArWfe6bmKzRVwXxdorEHFB4RhSUGs3xuqE4ZfL16CqkVef9rU",
  "key20": "3vUWPGHPVtNuMn9uesgx1s8qm8YNdrkp3PTD3sVgABGgU6NcF8WUoWHbVtwNm1eyz7vpztiPNMDMDqggVKb5fkUs",
  "key21": "5EaFsu5tT1SVFKtbyC5n7zXyvDyKP6xTHeRuVgUZzaZggo3a9xTgcMbmx3C4sumhphF4DT9Fzaw6ScpKZ7Mj1W9M",
  "key22": "3dQQzXorhSjRkoKxSpQsZrWjkfrVyQTpHuAwbNWmeeRG5qzpgdhwXiTCn1op1ReBdomrepKVecvE4rSRq8pd5xeh",
  "key23": "B9KrBxRwS65ixjeQnkywsGjYFexyWoiQDyAmFakHGE7k8JzJSURebRWb4MUhkwcSmiF8PdWSAkntYWvKUWfo1Xy",
  "key24": "4hTS4xaR8MR45GjQxY915y7KKNiGLLYR86gect12cy7L4iqwNt2Afr1N5GHQ9an3essUCaAnKRpbeiX2SduSeYqc",
  "key25": "4nrT8MU14W68cFURP1dDCM5Dxb3mFDEKwvyyLYtAujhwQnPcSJ9aTMHNZq7amfEztKcAiW28ePKssz5sNx1Yu6nd",
  "key26": "2BcmUGwnSw35Us3gB9s6ADbh8eY6BioVgfMBJ3jHeHd4pYcqX7AZsLJqHK97823vQ7L9rmYf5cUCntwAbHsffq8i",
  "key27": "5zmzifVqeEfuSSXQNue4shJyzQXchzqvvaRhxeQq7hdn92iaWhNwsSahqdpCTvJgLvRNsd1AvmetbKxZDp85a5h5"
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
