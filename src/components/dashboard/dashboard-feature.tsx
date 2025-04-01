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
    "4qPdXXdLqmNj8Zw82bDyBN79eYnt2y3Z5D8yDKGwK8BEBd3cGK5EzeqNw1L4Muw1wm7ZwZ9Rr4cNKMj5Mb3WiDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624BF4gVaw3zttEWmZjoauQGePkgxCDfPQuh7Jz44UuoKtJqq8VUn2bw2qEMf4CLjUZ4EjWrwg7ygCiEc3mUiw6",
  "key1": "3rSr5EasxqdoLpkZy8jaWXcpFZ8TxvHp4EG22PecNrvn6NZ76oQhWm97afj8dsqVkc5YJDP59NgNKy4R6g25VVHB",
  "key2": "xBM4EQxDoo5NgT2FxHBWAbo7hPnSwAZAvk2MPMH18EBqyxpxKDztYp6qmr4RrMQNTKN6yGYgdZXnRCtEHuFrtXb",
  "key3": "4vr8Wye6yjepTjNRnzjjmQ1htzURFxg1u2KJgxjzZdaVFLsByk5dQkPEcgfSHPWGeNKYfH1P3d5wdLMHbY11MyS5",
  "key4": "5bVVf3PNyGzeJfT8hFCg5m6KRH779mySjacekgmyaVfHpTLVn8DDfvs4uHft5tatyE6Y6CfavSqL9i89tzCyqUmA",
  "key5": "29GHMDihzv8YTVVJiUC931gYW7QYiZDxzu7WufdLYjWHjddhDXGTyEShHTy3vuCUQueEgL9VjxZYP2ngLkvD37sJ",
  "key6": "3knFDEZM4Jy3CaJF3wP8vCYBs8rcm1J4K3iFV7tgGgkPY8HG3VMnFwPm9LxWZ6mtkPsK6stFXbLHToVm21y2cpra",
  "key7": "471n7gHBVgukJP6UVRCTTXDDPS9ZNeAWNZCyHhKmrWDJnM7fpHQiDW3q21icZ8DcubtRS3QsQRxcjTAHeGzTBQ1F",
  "key8": "42WtcwZcZTNTsRvy4syzN71jujwodCxmN5LqVpHTGoKAUKwvjtbT8qhx7j9fjnqVAHQLa1Tr8ndiBZjL9ngBYUD5",
  "key9": "3phXw9d7x3ZwwnhPvDAE9rPh4TX7jEgtd3FsAbjj6XjGUXsL16L5xD1tmnyvPPwtN8ciMcSvpTQTJCkVCSKsUmpG",
  "key10": "5SdtUBewFS5gCSMhmnKu7joh4soAnYmVMii56BsyrRxGDxKfbR7GfAgdiDwEtAmP6f9SR2CzKUqfD39MkoHcbGPs",
  "key11": "2tNzYLsP498cJ6iF1NVfJdnJ14xPwSRVwXzhferXRwHMUXJu1WF7m3nZfFHxXa2RuYTe8UVNmy3rQMiw62cfmqv2",
  "key12": "2HfnYCZfmk17waojtsFDYiU9zFT1h7h2N85zWqmbCEdQ1nx11serpaT6pQxUyA38Lx488Fs8uqfRwTXhLN1oPkgG",
  "key13": "3mhaqxgF7zgJfijXbYYoRNLGCqBKwZUtCpvj6PFD3zn9diaPgFmS7aiEHVH4WCPpU99Z7ovMwXZJ5H45BwrTKb2s",
  "key14": "5ixzsqckxoPxGPW7gorw57gYGmGGXPfip4iFmHbw5ir4P5824JStKc8R5zFVDByuSR8KyYxoep3Jj525MtUPZMRQ",
  "key15": "3txaWuycDg8UVMNFmxC5qN6cAUH6QRUyzHPfULEfiWPJQ6pw2PPtLWZ6mB4hvGLoqD3Cvvap3ZnW19auf8Y2rf4N",
  "key16": "35Bf3TAhvvCeq5e6E1zPpMPyosPS2FbinP2yhQgC51agRs31HJk69MpUeyKxHeRrhQMmeZLuyb8qXJtsiyizdRbs",
  "key17": "5h74yjKnW1TCEAg8rw3XDTWocujgfqNq1mwzGJm83nX49GsHmavktUeUZkqH2vHEyzhffQQZm2RGSxb4Uj5SfruX",
  "key18": "5Rdm2bBwPBoZeBKZ8Wmuc8ESRMq6KFa177PUArfNxK6n51G4Jjhz1uCbEN4hfBcbWgGhxviTwHB7H6y28tPEE3kU",
  "key19": "4jZ7mqUrv3HxKevbs9RGsv8pBgjQjARGLRzWttvUJKTrKrs8oQyNe3goApfiVTnvwsvnbNpnGwkJo1EWoGBLZJjn",
  "key20": "3fnbrrpJuryUDArvpobkuRtJA29ZhBoKfLWvypomYjWX95E52Ln6h67DZ2MBLkVSXBcZK8syggHWjZeMGLMvmxoe",
  "key21": "5UJpK8DZipGxSiMHH327ZK7w7YQAme6v51zCziiXRugTHHwL6ZepZ8TswjS8c3GHX7N1csHC2LrdAz5N1go2hw3g",
  "key22": "29aqm3xJdzRKWnxA7LF8DoNH5tFRccieXNuZ3X9x2fXL1ZRP37FBexL3Q1uu8rdHdYE2Pk4DPF7eTmxyzMd6F8qc",
  "key23": "3wA6EfeNf1hkuYZSmHb5Y4X435odM5hBMiEfeSfYLWWP2ny5PcixEKr3MHDTkrRSY6N2mxWRFkhBjoHuB9JvNBLU",
  "key24": "3hp6asqVQqEzGnVZ9bPTrrMuu8AudHrHTz1DaeSdtSVzhZktuwr3xrLjtbMqEhhayCcfbtfSBgt49DZX1QvHLBms",
  "key25": "5Py66RGqoFESi1fod821iCp5WXq4UhKKLPx7cvzKXkMx3yemXrKJdpKyCyrnxAbufJXxhnXtbMTDdinXbxHox3ds",
  "key26": "5oJjHWiLeM8wEEuMdEK9B47cofUcNYwEvKBQ6y33hKwKsbLaqFKisQRicymXJnV4YKoesKkMSUwc1kaZ5ptjYeZ4",
  "key27": "4rGy77hsRrJKThUsLdGeoxPodzooEr7V6m596M4jJZZkcFdP21CmXVxkiJz41iS3CWKzfwML9KfrSjsaHKTroibk",
  "key28": "3LEoRy6qxmEA4qp6mK9qV7TzkekdBYHtuSJ5gqjtAFDWDhdNokuCcvVgPSE6UXw2K5RFpEmYfAvEjqm1p7UZQyH2",
  "key29": "2G3cM2ZXEaedcnW122etCUyE6gF7QkEZKNdvtceUhFmknrXDMCMrghupbKW81kp49Revxh9t4MU9t592nXBbgXAM",
  "key30": "JNcM22ZoNR9644yyaDejVxTYUBC67qsj8rsre9RWFrMjLFVbA8tHSRXHWxMDhFUK1crG7ion5k88RUsiACMwcmF",
  "key31": "4AxA26sJXovRNmAXPFUuibykeJ5stXHJjuwRVu78vo6ZeWFBa7vC4sdcd3PGHxEka5sVmRVQgNUmSkgVhgmWwtLn",
  "key32": "4YULSpByiUBY2tzV1HaYMb2Kw9Rap8XMavTEvhs5QtyksRhExfu44nZhPofcmFc1ncKGchocckbwsHdKTXLSt8yD",
  "key33": "2JuTytosoeqQYW69W6Pc3rx4P7dkpFVzPCbzVzV9Mzgj29wVgYPtQy658Gh4jAYTgEeWhuJCqsA8G3VPxUuRMbXR",
  "key34": "4ttK6p1Y1yifiA1SEXnTDGMruh7PqT1BGaYLrXWkEBfaivFNK9jKijMFYnBWLEVe1GBxa65HQeNq1WzgvfcDuS9D",
  "key35": "31t7R1DxEZotJexUnBLwhAUbmZyK71F5HWf3EyM5yropvuSiSfefWurXob2MgSoRXq7vUh4BubRxzVsCmtEU4vjx",
  "key36": "5kCbvtwr1W8D7sVquw7dHA6tSmRHf6kVdPdgdFQauH18XqhMvtL7erkZiYZ7kjMjNLewfQbL9PE2xzoeyyP5Adf8"
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
