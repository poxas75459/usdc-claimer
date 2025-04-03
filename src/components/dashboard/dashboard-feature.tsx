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
    "2ETKJYzeQdAB4SnTpNLyrKfx9jNHMHvkFEbinM8MaJtSqoTPatqAk6LVBMdSqJ5sdiSd4dBYExVAkVLGteFzhbux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAtwc5Ug2J18pr6E9heFoJYDv3vY9QdDVFRtZijY5vdKg4VGExfjt8wJihzoPEh6HgnanoqgMMApoq7ZZCDvuSS",
  "key1": "4EAN6LrG3XxjTg3nASXFjCNtjP2k8cgQyUTgqx9ZAXDuUjAeb2jETMyqrAT836hupzfwyjXkyQHrjXbobBR3XNqS",
  "key2": "2ihW3XM4nY8bhKtHjuMc6uLgD8P1rCqznwiDr2dPekC3PxXrz5ZgwBFbh6StLSwuprCTZYz2DNSk5s9YkrMqzGpv",
  "key3": "5DC5QbkJBMrbqYC7knVeexoKrEtwbqSMUMrLkbkq299ahpmAhEJFM6DrGczbexyccx6pWunYFc2FPLmfAx5xUxeb",
  "key4": "2NjJREU8F43oWH2kFrDJio1fsUFngsNzfbzu7oPD2Ymb1zzZ1yvV4oTptK3X9akqUuhzKnLpm2r2WMwu2nDuNQYA",
  "key5": "zSogdK57BbezgEMumVijahENFt2ehyP8AWGaMmTxEEGHD97iQBnv6r4emsnDgfBjgyzmjfXu5TLWEH9ziTj6kfA",
  "key6": "5x2DBqMWd5PUBLnMp1Z96YCtACAUUGGoE7sXJRAnNJyhSkZ3hjc3GyiDwLy66ERFJvj23fvJagx1HemoUUL1M47P",
  "key7": "3Y2BuxhBMeXUWGDT4KYh3tfvEUTAmg247424ruUjDoMtnF5k8fvGpsD99dyns4TmNk2ESW3pycSrh28aWWiw5mqW",
  "key8": "2fg93xTQgXgSUrRoqMXytMiKLZYjTUdH4i85M9Aay6qwhPLiaJoT319zJwetzmJh2JwXCRdUk9fD3dm1qrNuPGUu",
  "key9": "63kjVd7CbdajSALnZdLvug9gpTzRbFQnLMyEzEMhVkgehENT1aY8FAcHAznfptXTaFqTdyQbnTC9uFAtgZwaCZQN",
  "key10": "EvBy9i9nQX75WXvxTAH1HwbinyMjhQcnh5LeGhtU4avcR3TSp3zQbxU2VAfLJfWEwuJsAsgtnxtY3fxm2gifTQQ",
  "key11": "5U4En2vpGCnDH16N24SrPjFFAQLwceqrxKwNmb7gcU4jf7YJCD9RNbzX5SgPR3REmr9TEwK2jmPMutHgMghr92sh",
  "key12": "4jGgbQM8HV6uzcQaHk27HTWZymFyxYmp49E3CHZ4MpfpeGxoDBW4StXfPCsLD399dHyk5qirHAwAsv6AAzdxkt8U",
  "key13": "4ZUwkQgvPobDY69nVHHWLCF1Zm2Z3PnX3zWe2s9eB4G4gVP4kHzTwqyRUdn4Y1vewZyhcxRjgbzwrqVUwc78MZmV",
  "key14": "5ah74M2chX2cLxZBjpDv9HEVzSSQnvJHCzWFtXuqaM9R9bBXoeBzufcxByPHjDwqw6PVifFqHA16EFAep2TVwdUL",
  "key15": "5TVvbGSmXDpi8sZM9yzZdzLbLHyFdmC2CwQA1x3EZn5aAs8g3CtJVQFY7FFGGpDmnKaaMD2EjAaN27jF9N1ufFfL",
  "key16": "2FEJqYUiQqqFfAMzrVTYySpMkwpkv9MiJc1ejy7EFV6SQYdvGWwwDQHhQvYob9Jm3ZT8s2SYdgPCGzxMofEHfsZy",
  "key17": "3szdqadbDwvThBuabu8pcMmZ2KU1cB2ExAWotVEACoikgTfvrK9SABtBqQaV7UJQMCTpuqfCsRTsau2oMCfxn92K",
  "key18": "47f1XK63i6k18PrcbgrrvNn81SJhX7di3oXVLCHaDF3FoTUdtCSUSfv5x1FL5oZLkixFVsxSV9QYH7VbDnR8DnQS",
  "key19": "MzsVhjB1Kvp5UbTaBfTW1kxhgtQUoogsAACDNWsvU3VBmEUppyJpaHzhefG1B74BRgE548VVxi3kGNYnD8B5tB3",
  "key20": "3hq2wP2WVSuCNuz5a4RC4ZEKoaJYgh29mhViw1181mjVFKy3PPqKAmA46xtR8jHyMugdjRzs5msnimYt3hxdbP7A",
  "key21": "nEr4MMhVfzpyfrHq3K2AxCyDzkjQ2k32G8WPHzYaJrWdAaxxE3vGWPbRydwFW9bEcb3y2ejXjCjsUV25WWbGubm",
  "key22": "rzVcL22ZrXjpvzNp8uFePFNNrR9MjjRtGyKSCq1zVPEmLyg8qAP6emPvtezEPQpWfJ9yR46KEpMS3KfWCQZm2wY",
  "key23": "61zn9MA28AJkgUVuLfeuUuoZneAabhzFZwZF9EMDA3MKokJFvkmbDMNRXvX3d4cjVgmKdP39scjNpWw3TUYh3yUg",
  "key24": "AXZPKNVBX2NdQbMTnHfAnkYbUuMq7nvSd9EaWzDT2xPnaSfEAs3QH3DRZkEBeB53tKebpReKaeXFmv3jwteWrdr",
  "key25": "2yb8jHeoioQafwuhZYFonG6Xph39wfVmRVAmEsnnvrRu7jfkNEzZ39VWCfjxVycym5j6rNDYP1KXMRueX48xqeb2",
  "key26": "5hFuUNVMrMZee24QSyL1y3kVhikAHvT5v2KdTSJbLCRf4jV2rpa8qeg9pZAWcL2jrp9ngpGNU4tVHmwJ85yYhBoW",
  "key27": "Mn1zZ87CxrqdxHrWD6AfAeoPr1LzCv4nvMykxnRN9HPK2Z7v26PHPZg2ZuhoeH7GguhAhqf2MvTPp47LGYjP94W",
  "key28": "4rFwhm3uiu8YvDtz1QoiGtz1C8SDdjxfubbzrAwrNP9zrQMfep17vH56YyT4dazf1nGFJD5P3RYWXSqJcV75J693",
  "key29": "5aXThwFUjKaKpxps5r5SJCYDGQLRFg6Lvavz9Jj8hTMS7nbDCw8VNWZuzx5C2Dud34AFDyMXKxTi62DPfH5eV2mb",
  "key30": "t94M34gFtxwQtrBQ9Fou7XsSVqvCV5HpNahxmxsPduLLU9Dqmyv2toS8puKXyy2jpNiZFtEBmz7Pyo39j8p9m4z",
  "key31": "4SxfBx2afbKqkosiNtVnhRxs729vGdEJ9AWrBrYVdMLdUi69XSBAypCCaqmiEM4iCK6qX3ftpsai6RJG1WoZTEbL",
  "key32": "2dymTCf6o2iEWRdbUXDZz7sw8ifhiMJXKNEgofbYVUrgMuWrSRTkeAkKmh9GhsV3dFVRRkwsKUJ7kjeWqHHrSrZM"
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
