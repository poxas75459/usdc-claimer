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
    "5t8WXPugFk9ABVxNqoyq6up2sLbC6riDtMwapDhJNnEdPAhiNXswXKGqWPymEeAfaEVbDD6YTuuHEANU6v1xm2Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v32aPjbzNzfqWF5kvRaDdhFwFNe4Ywz1hJdyTC15R7J4H8aGVsrm2hMqY3dn4fhMHZcu8MDhJkUha3TswgFSnLZ",
  "key1": "9sJwxC69UAkf1uvjUrJmYcEokNJSkVDayoc31LaSyDHaEnXHB4h2xfVWUTEURDLaAu8qa4wW9M3xnzkpPtPK1nj",
  "key2": "XXMLdT6D8seBYjRyhYt49st16jHthnYP6e2REH26TLba3aMS1SNhyYXaf2j3CHk1aDkzz7xSKjbL4WgkB8rJqZb",
  "key3": "3khwMvBYBYVBK9Fv3kLCnirac1NmdLEQxo2C84GmTttrcv8MY4GJsh8BmQ6iKsAaAvM5TwecEx14ygF4hpK7WmcV",
  "key4": "6642DfHY7EcdgdVaTaqcvhop5xrzcR9H4o8vz9gcemenaZY8XUQPbt8F913jXya1Tn7rNmb1M4j2nQfNuVNT9VSa",
  "key5": "4fRaserJgBeHPrJ5spaxxvchuTzWDiqnBfAi9qcshNWAkyQ1FvPdmNavuUwdLGymF81MLq1KxCPr1ciUwu8gt8wS",
  "key6": "3tTECCt2HrwTP2rdTTnpe1x95gwf4SaVLEvJunT44Ap6ESWHVueWaSu4vgV3CSjqDA96MoFTmD5afrW7aotUy3ap",
  "key7": "4YHECH2tnc3PpbRtEQcV9nF9t7Uiw4TNBtnkwPEbkKa8E3fDkcQgiUAVPza3qSr3PUPQCzEGLBkcSRsxaNktRK57",
  "key8": "49nT6MwdJqEJny22JETiXfET5EykwbDBh6T99Bi1A4kFCcZNXWVXzb636GCAyyNpPYDSTLFV6HxpXhQKj3bTPgfF",
  "key9": "5zbm4yNx2Qbb5yKJisrffPRHvTnY1p8rZEjPfa113zcJET2dSDGKavDbbSdFP6KvE1X1KCgaN4kwJqZnFdzSg9uS",
  "key10": "2zCFtYMx9qV9RnedJP9KQZqP5V5GbHC3ziWJBwNRsVwyNyT75kejG2AMhZomeB8MsMqNH63CgABSm5VCCCpswz15",
  "key11": "4kug8pTEe6NS5XjxAcbyCtYiiZfsv6dngbAtLjrDwrazMAymHG3Atv1J1zNszeXKoSqnfoh2SSBA9VJgqhJEaMVh",
  "key12": "5agFY1kGUctx6TkXiBKTPVxEeaerFQruLtRTp92VKJgg3aAKHxWG3KNUtHsCydd9BcgjUF4WhvbceMZ3tFdZHCMQ",
  "key13": "57pMnYzkjFJKzPJD4t3PvrqMfNxiVHxo3jpBNgf1dzbJNSUaAqcvvfQQGdbJ1LHAC2KgtPDcwrTE7zTg9nR8FR7M",
  "key14": "3fvpEtuEMGGSDmH3zotbABvCe6d4s93GHqyZVMLaDmmWALJuu6bcdCw1mnWQ2FGhJqoj3wti7ouuWSVoMyP5ejod",
  "key15": "iCVZi2VjmZ1tcSiH2oMtpL3vjBkuzSMCw1yDZ5Yk7xHGCMrcv4tEAvoe6FxAbrbUg9eixAL91qw8QTYHkfRHVMJ",
  "key16": "5TM7329atYQbyHTr7HTFgGSMH46NqfcoUkt5j2Lregv6LJhy5SsvBfPaY92nQG7LPWWNTpfZ4XG5TniKRBuHK1kR",
  "key17": "WTGv1Vzm8eTvarFjYT3YuE3sLcbCLMxhLkeSyzPsYqVDJLUsDnSgwBHtDwUt64RwbwZTxWyKqxTRXvo3wSWgrKS",
  "key18": "oWCLA1eZY5xkLm88TDkyran2ffsRTkCoKCYXczTjWJkiNV2SQekrwzWswuVuQdJgint34aMFRgTfE8kEbAv1QkJ",
  "key19": "5vEcFXop3EtHmZrRFjag8Gq6MaBmJJeSMJrHeuno5Cfq93BKhQJWQXqMCvnLd5DpCLmMbTLahDA5yk5rVeXkxYqk",
  "key20": "KUkqzZBiRoXB9uZPtC4DHrVaUzH7ZgZwFmy6dyH8f9mCC4n7idE5Q19nGdMue96iyG58XYtvsL681L66Pxe1ndL",
  "key21": "PaDYuVDJJKaZQp7cBwET7Uc5DWexjUAhecwHbi393xA9wQh54MLYcR5i9TJ4rbqY3qpaSbePQqmdMN286cJ1fi7",
  "key22": "3XemAJyRYwe3nBaM9bpxGfef8TjdxHTZKf8JHZC6ZL5SnaTPYCeinx5C41E3VHNsM8sqmQkxmUibm1zX2JEAcM5z",
  "key23": "4f5FDgqwNm9sZjHDygN6CrKzySBSseAiwtpb3wfTUKddabFW2wz6n9hdRP3NYYXgootaVB5rmyXqcqv1zE42BHXS",
  "key24": "JbTYdUZqX2mbb1s1r2s475zT68rbet3jP7L1Cxaj18tsfjhGkR7Hm1PdxXREZyEr9LNNJcyVvPbX8X1G6SkEdn9",
  "key25": "33SqxDbxjADBDa5tNXGQrHfVMNh8GKeMihhWB5aRVbnRK5WbPbBUz8NaRU4cLkoyg8y5rXF7u3gdowrWXHxpkgwV",
  "key26": "3R1mkQSYhnySnQaskgkGoXJNGtKowG1cCDQsbsFzpNx4sexYaZPA5n9L8W5JbX3UD6eyCcqJ1tW93oKxDzTLE3Kq",
  "key27": "41g5osvJABjffp1YQLFXNnr9wxXwLAoXYydWMM3p3oKtwV3umfpUAJRh1ThfdBZdykbR3UR5vrjtXxZhV8dN2trd",
  "key28": "4qLWhSnNV3X1qQdj27cRqbZpnbrNmjioMRaom3VgPoRfdRC1vn6ESgaqkrALXeUAom9j79fkGXyUYQ1y8Gyd4sTN",
  "key29": "eYWa2PBDiu353814Hb5mosoVqUQCREVMHyZ9nqL2xBRcjHCuvP87Zfh2EftV2NvypqkDwfBtgrrRLDq3nHBWvx3",
  "key30": "34CRBJcUHC98jhCDfANZ7ajEhPn7BgKLYd6hwnhFPy1XNwGUEbHtp3coXePzp13YVg7kGvm8YT8ErgD65B9YezUn",
  "key31": "4D5gZK4ax5Ek2S1d8EizbfmuTHfaQEg35JL7yEcdwTTXcB8neioEUqKLAfArBp8vxmfpkFFRteanLkgFnTkB5LfF",
  "key32": "4nqyCPJNVLPDd7RCUH2HVYGTtRcPEA8qTynayT9QXEb5wmXut7STQdcJToBRGnPdfVDquYMKMET1fxrpFTa3mDRM",
  "key33": "3Ab8UjiDMkbtCpZSLxCae7MEF1U2gJAkBfBRcgGyKmJWkaPpGJkwmeyn2HuzccdNNFE6HgrymfZKepKcQAP66zhn",
  "key34": "47oH8zRDp6rCAg9BRYivTQBZjh5cKUX4ySFTqF8LDcv6Teprhi6H6tQAH3tdpob5VucpiYUS8wHBcSTKk2jGGd3K",
  "key35": "2PEZhthEvXdDxmMXGspsYmzb9uztoGuTTDDWRnqhaRDYheQekrxhvuA2LDE6DkzeZprTJ7iQiYg8AZB64qx22VCG",
  "key36": "43Ldm8gSCyP5JzSNNvzPucLrYQhy7d76QSm5JLY7SmEkDzFG3NBGX6RuWAVceWYHmGNsa2uFpxBLYsrb4bd5yhtG",
  "key37": "2c6FbfSan4uBkNUsv2RpKgM2pbiUqVBJRsQPj1ASVCtiLgmu5mZ459ZAjYxDfVJUAvo5dFWVBqjo16x7iDYd8HZQ",
  "key38": "5TjUSzkRMoYDAvYCev8yrkHJZVkiTCpVzcnictFHtLNSCDhhiwvVk8PL9kPc61B5MwcKYKSTprKvAP4BHyYk3a8c",
  "key39": "2PfChYMucr5637W4AbgATMbG7zf7yfndj7WbkmjLUpbZMMytFvQwdzWA7xst55jLUj3SEgwzX1MRpCDX1Vqqqi7N",
  "key40": "2TkZc3dnDoSJ3h3zpg684zneicJotLP2N1xaXvwiiRBXpi6kWbzMa2m8bqCQ6PPjzTBtHYwmvDFx4Nioo5ZecB3P",
  "key41": "3fTbr8JWxAo1mmeS28RqHneHTHDBD7qqCBPiVNXAKGvkXKRx1ERnMjbJbewps6UbMyAXMPC4rHqstsABQ3rPhy4R"
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
