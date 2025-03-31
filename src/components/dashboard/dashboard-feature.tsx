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
    "3nrigBV4ngjsAagsv3V6LTujEgkdvStjwAYK2jUe3ULJuCsoZqvKQuMboMqq4ASxLzvXrYBPckQVBatPEexwpaJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21jGw9rSSddpLk4e6mJwX67GCZMgfGiQJx894Apn7o2QMBCXuZrt5nYb4aJwjHXh2i9sK6ReJoHnA8EBsNT8rr4X",
  "key1": "KBQHXDyCg8jejPMouviqFhFV443zyVRjozh6KgsRyFZm2mkNLcK7A8WAiwh5fuGvckT8MuNig7mgTASkQhWL3Rn",
  "key2": "q8CrWst1dhXQGwR5TTBvo3L1EpdE5FsAiZSFvcMh4awhkKWtftddQzQPtTKnytJZFqr67kXPyMTavdse6SQYvoe",
  "key3": "42CoSVLGamvgq2B1LPFFJRFQEyPVYL8pfWBjtfGNMBhVFs7JHzzzWxXjekJMd2MGY56LWQjE1hpoqe2psQPJqC8E",
  "key4": "2NiyjgZZ6FA2f7LuHZkEhuQbpERH6oeYJE15DoKw6YWaLAaY7w2AyHSPxngMS3kjv1xsDDH47K1rD81CGi9eXEzn",
  "key5": "4h3S3QoGdU2yn94se4M1DH1iQxmAH2gw3fCgSg31s4CJwL6GV8rNzhXju2DXw9YGHdhGkyjYdsZSAcUoo6hinKoQ",
  "key6": "4BSPY8TdEPrvmKiak9o7mjfdEumwr3NAYcabHYkWiNdMPYpWnmfv48VsHEKn8TvSP3w8fMF3fGQwB8YGqV719ffs",
  "key7": "Y4mJZs5ymGQcCqtLWJS7qs3YGgXEdpkpg8MbPYTGwW8Pq7LMYJD4s14eVuktsLPh9EftLz9iGjzERCmD8VaXaqt",
  "key8": "3THDH96fsPHsx6nDuM8nq43r4op6uLSvfkUmUHrAnTSgMBxwP553vtBhPhLYrgKCo3EXygNxQ2fSuEqVAw3Jt4PK",
  "key9": "4ipJz1ibTfCcr1bgaJMfj87hePVbbssG2gZPP1pfwjgtA6rfDxzmR3xrPLypPpJCNcY7mrfVMjn8UWBK1wcfFTCs",
  "key10": "bDMUKA8JL1TB2xYzaPT9LDELH1zLBRjEGNA9kYhyUWrnPrxxCshcdUEEzTt4bUZ8wqdWfrk1H3ehz9uXzQQ5F47",
  "key11": "CF62wtVSP6XsRgVRPQhGuUn7ofjykSULY1zx8MAxujVJMDWLhvMqfS2EfDsbUYGUc6kkjr3jQBxc3pe41RTZZSe",
  "key12": "4czbYY3Z92GLr9YmkApNcvqjhgdUdff9QUjc4BC5UD516prfzqypnh5cJCBfw2TcoWiRvVYy8ErZXfiuok4W2vkF",
  "key13": "3V3XKpeUMVGGrmra7Z9LZwsee9wX3emdkds86okFvU1icXaTV34THgCnHyB9JKqg3h4GnriCWyTBvmnXbjpVFKwh",
  "key14": "4cRnuWwK27uDNecLoaSTbdGjFv7dnFKY9QSuitsEyz2jAPWqR1vr2MEr2acLy3Acee9rYJf4aaB3g6979amg2ywm",
  "key15": "4esFXTQfmDFVjmPG8qsSwQjqDsNiNMLA15wE7QCBPB1v5gtWaxhB7iNYVTUM9qRWT3R8umAuBFjctHv1GMCfmPpb",
  "key16": "4t9qjeBWZz3Ct8bbjVDYVAf7oQcBsBZsMAeSLUMH1Y7tKj4QnjePCBjuJ4uGRMYfEXRG2VGQFfYtJnqaK5X7mSWx",
  "key17": "42WYzdqczH5asX9qpVLc9C8Z2PozboGN7Eojmv5UvKxCBZXRpcqasvvvQ32JkyzAi3cTAfD7YNYAtcjofED4MT9D",
  "key18": "4xsUA2tFPCHDWmCjFNZft5DYiKAGmKy7WBckZq1HhcTaADejWQVWngx2LLxf5FjgTnG72DFHu7CDiVTHrJbmNiMe",
  "key19": "3QQ4yGNDD3BpVjUDVwHRCDXxSBn4bggwHK5up1dAtZ9fNpibzXpMH7DWPxDBb4EqrT2XPKXQWqhgiFgZJKBgewL1",
  "key20": "TQEBojmYQqQL2ByjL2xaeFKNE57GwhEgCrxiSZxYGtWSWZ4a2JTMoXBco6VKHWWH34x86zFDmc1u4QLFtmLqT62",
  "key21": "5cd2GxJ7hbLXmp4JRQjaLRvUXhdUxzCXyboiS2R16wmevteqxw2BAmG3Dmjk8W8m26L9vDFUheqVVxL2yZetiToA",
  "key22": "4tbopDeGjpHwiEuLVd9Fddi6erkHeZQYdyCAuScuDJKYhwR8ULn3p6b1FY8p9US4cpdnPsnt1opJy6cYbUkEnCB9",
  "key23": "5RbhDXQhAZYmNCP4GwBCCTwNkmHDqYqykxd86uisoSGfe6YXdfthBaZMdPwkimeAd21J9ExRcmFY9kHiw8nYBLvj",
  "key24": "4xMJqDk754RyqxqESRRgbyLRuQNry9J7xvJRSb8EZXR1hMQVEqRuH3DEpa1ZMYvqjs16tgwhM8oLXBe7q6mUHddm",
  "key25": "5xFEUjWKELN8qMKoHPPEgADaNm59ZuqLw7TwJNjhKxd3WHbAS9EnUPz9mu5hYB9o85FDVsbfSNSquZqKPnWjRgkj",
  "key26": "29HsrV63nCqy7cyRa7UdnUYNnUmLQ16KzqASjdicxppd2MPnniaHC1Myfrk5EGdMnn5jQkBbXezG72f2x1WbrCkX",
  "key27": "59HYMb3Hf7JPvrT23AHA9tMkZw4GmdGZvJ29nak1zTbm4PMYybaVzNSrf1zT6v3jvnwLMTG9AUZ1ixBC1KXqdXa7",
  "key28": "3JEgDKRRMkenaKqa3gJBtzbicXwM5QVC38dX1V2jCYaUzSvPecF6huev7PayBAMCZB2au5xmRqRUgzP4jrcHur4n",
  "key29": "z7YByXoRz79SzC8Jtz1vrPA5BPfSStBiBnamPkD7ibPYp6WeCZp1DU4crw9BDyR6NjfUUQ6tke4tSeWzuNETt35",
  "key30": "5hVe6KPekNKfpo9kx4gDjnm84xaDaZHuvG2GTAnfWu5ypmR9ePUrhfpmot1FhbddXRMU3mHMXmsXG6Pqjoyyfp91",
  "key31": "5nyczN7F72m9oVHLjjUNqtYiSHJ9DW2SBQV1d9vX1axpKXLf4hXq5Nj3c84Ue4FLHprYuEFB5MvJvxmSE4MxiuBZ",
  "key32": "4dpnLVWThEn8DCk8bFK6YADtc76fiUgE9kBWMjrDHZMdGfoiX4AFPx4rpkGGtXtHU3yhqVhyJiJxpgFuxU1dpk5H",
  "key33": "3o1c4VbqsEdyx77F9cWx7BTiA2uCus7a5iJ3XdCE1ke4Qrf3VQJmNAf2Vw5UXxoxSo1gt12BwkMsz8SgkWFiA1tL",
  "key34": "3W6CHQ8R619Six9Kn8Dysc7cS7aZyxgCmkXtSEwF1Muun4iDPqZGfAw7woYK4neFtND726W2SSg3pEBiB39u6TpT",
  "key35": "41g9B6LVRBntGXX2ftpJqTn1NFXyPWBH4pZAkQT2PkkGoZ3WVdEKjHPKncBBB3tSFArZSZG9C7BypfWPnUMvbPVy",
  "key36": "4WdNkYs8JA71LXHip5yhGuCVTSQAFmLA5DgP7NXEX3UE1EVjVcbC6pYUDzLDNdJm2QHFQ8ShbrYbVz4ApJKKFC9T",
  "key37": "5je4JxnvA8JjuAn5GB5icPBwqVSXFRJQHXooYSQSpwLbRNLKsxNU5TDTf7Eo8dXRyixubZv7AuxsmxbGQpuJrUTR",
  "key38": "39MdvwcTG7oS29Tc4hmhUWj4To7J9yDC1W75xyaQgfEfebt7rp3Ed2PbxRXfWPFft3ukCzMGKBpR9Uwwy3GW1qbw",
  "key39": "3Up3iHNfbKsxgHh9WgCkE4HYRXumRoCECTQUvWmUZK8XkMQSzHBsARPu56HXywt2NyLN6jFrqwycAf66Tqi9Aqz2",
  "key40": "ogpbG3xNtdCCKTSMaGZeBBNsahDoWSHojM7HsdnFvA1fvie6nqYnkw3qRXNguE6gS1X2GqFY49oZmSPt3EKCWT9",
  "key41": "2CgpB6Fv1Qsc5Bzv62MVGSzn7b4M8mqAKKELPs5HSJheabaH852gwPxbzbc1KRNMjxLshqZuAKTnSdXdwabzoK3A",
  "key42": "67jWmYx3MifDSQZ4BG9p2EqgzAGqZvrRnfa14AYfEBR2C4fdZW2UpJA2s78b87iYjzqm8Pbg26yMXHbn8DPFdNk9",
  "key43": "3zT6gqjZKyjNiTkiz3nveZGmfDCFN2JwdtomxBwNTm3tAGAqZkGTFQeLSuaG7eeiGED3zgyjpWhLrqwdj2Em9JNt",
  "key44": "4bHLveKnVMq2dMDffiFNWbP52mzU435VYuf2iDuQefyHjXJquNNK9sSPWkpjichdMDMJN8L16YBZDANMd19DgBZd",
  "key45": "YV8h1wV7MFHTjzs1EXzNXmJH7UkmsyaYKsn7DcRepMePpXKKTnCkwTrwSQKnDxYVMXAsWgp2H4pU4Ds4TiGCYzZ",
  "key46": "4HgJX3p4ZsyBr7PWbDRPzw1EANki2owXdpGR2Lfb2WVt5nLM9nUGpzs5w58BwPt1CEsruvm4pS7qsvpbNKLnTjZ2",
  "key47": "fA8vs7nyCsqrKCH2WRn1XFWr4E7UwR3WgeD6HMDhDbbK2SB3g3HLwuBSDewcxuUAfrxJgMwH9kXUcxEm7eCogaQ",
  "key48": "2sweyTawtUQsj61XkaVNNgtfun1Y2pMbVGPAfseBeYFuAWFfHNHdMkYoiZBPqEwtBpQ5qrYUQhu1FdTzBopoDyA",
  "key49": "2EpZbxzJfEgf5KYzCdtTSF8sFL9WkGNcKVJF3uvwvc2qSECw4ocQdGrE84Y7Fv7vYkSiCAWKiQxQyzbT3DBoRt75"
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
