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
    "3R9ohSY79UsPA6QMMa1n5h2dw4P8zNuSqD5qMrrTf69fhto6rRH9banC5qCDTTqBvFpZjFqyuZhXKppKRLN6KVuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfLUB2gw7tjTJAKHoB1A8rQLjUATcNJUrCKGqwk5Z8GnvD7SGgjotL8u4gyaCF79uvg8UUVrjGFNa8vpe5LzdJb",
  "key1": "4Z2JJPqhGnPmLhR8nkFuvKAzmhW1sFGZcrkHekea48fF8E67JQKG1cXPir75zAkzLJsCeBLCcY84j36PxxRwk3WG",
  "key2": "4wSadNQKKzLFMjHp3MsxgwkfQmghasrtS19eiz7YCTT6XXp1TUG7wdm6fwCh1rEzBvf2xbgdSbe4efDrkavRf9xA",
  "key3": "QxZwKL1SpSkSXhkjVSuDNmVZawVBArHYjj9foqd6tzH9jFxgMfXeYMDGHFtxj11KKFfbXMm7fJCB881EyvqSu89",
  "key4": "5wgRUuDijUTibUHwZyJLoZqnpTXUuhkiN6i48rGuJemWXy9j43hkKz1TDnxcmLBDpDGh89wFBjJiATUj24BsDFFu",
  "key5": "Q5hR6yE7xLFoZpdHpLaDhzVoAPRtDfoDAQRCDnyVkPrjo32gD16j5KhYuTjkSQwfUJmyMf1s6BhKf7zfF3fCoCJ",
  "key6": "3TNeJWwDqJGX57V6RPCHVg5zPDE8TfWhnYBiEx2XB1MTMFYRxPnr6Z1cjKFnW6LLQWufnCG3hLsU542htw6ic4bX",
  "key7": "53XKbXaQLFbXrKWube2YXMPWbWicz1FydPp3EKBDmUiPcejdtiaHsitCpu7SKwdan7cZzVfhmjSqFtUhb1zuCbNf",
  "key8": "23abUceetpfrSk5oDYQoryQBBGmwotNeDWpp2uekSttcLdtfyEwxsAdDF47jjpBHQC4mXFKLJhTmxLQsmtgaQCG1",
  "key9": "ffXpcp14JgEAHbWJRpPDNCHD84kHhPqLq5FxsjZkVh5vyjnnmpNDD6BVxUYrP5uurHeXM3TyDQkVqXmKuFueUcd",
  "key10": "45UX4C4HFA3ZYJRVTfwEMmoipjnDU3bDsMTqksfT2LqzeRAr7QXUxk3o9DcuLXsQemw9btkL3tqSpA7PqvaXA5qB",
  "key11": "5ZFdaxxY37ZxiM8GvHjS1X8hqUqXz7W1iRn7p53Ucm15vC9SWe4cwLJ5Tp7YeYVz82dbfDYp51DRf4efexVQD3fk",
  "key12": "4jx1ri2LynT9ALSgKwAMkhaSuiaFRcgV2Fe8XNQss8eopu2N153Jh8UujQQkLV1ypZgis9MMsWthD2aNnd8G9Bxy",
  "key13": "W2NVtJ7vSeeuJaq6ZadfRyiE8s7X6v698ToDPwuT8ZHKR1CbUSfrjAEDVESghGhbSm77G6BgW3AkYSY6NQuJoNe",
  "key14": "xTXvjPf2bjaqS3FFcz4BMsUNjf19gUGdGmBYLWCTRUaRo6LAYC65M7TdeD1TE2o3FQFFSMM93XejzjhoDhNJCUd",
  "key15": "2iMxfycrYjmFiZguNYKzEx2R3sUi72wah6KKYZwgcSBkSCNDKPKfa8bnwE857R15QpBUF2Q3n3k3wP63me1jeYF2",
  "key16": "2AeTJ8JF838GYVNpvfDH92t3CCK2qs5uzmKZJW7FTYEYj8LWB4VanGfZMcPPnMVKEYyvZJ2kt3eJBqV84XyRnseE",
  "key17": "5kDAbczzZHu5bfETV6xp3PMgmfa5qmNi4iaF2Sr9SCmt94EdjfHPoy85H4nEznTKdzYZzzC3gHhtfVjsRRJ89mfQ",
  "key18": "PLneLtAqRVVS8nbqU887a7AtDH8hvA7G98WAtngg7sNk2vuBQSbF7UR9i6n18qSVXUVDxWDZqvfq8oz4KsUUiZR",
  "key19": "3epfmxCWeXRzsjLCPY7hGNBJuQaSTSGKxKjwTabroC2Q5AfsVxFugXTGrKPKRRGVbkJf14j6MmHqGi2JMp46ey9J",
  "key20": "4m5UmbzGM8sCFgjUZ2rUa7NYNVtQVxKGpw4ZxfcQmdocTQ1tN2vM9bittSSEkqR5quKsASBfB9rS17uhZEVWG8bT",
  "key21": "2ZRwtyJzcCqq6FSddE9ASD54TC5jA1W9AMRqkwhka32dUBw4c1sSwvF4w6f9zPANKHecP7QMsv2nZczw6Pbc5v6d",
  "key22": "YhWCqA93mdWkQx5GtBVphtYBtxPio6beRJEFmdtssan7xub3QrTrduxmq3sYrdkTDyiv1o59B7qWsUcqfG4PLEX",
  "key23": "56RnZ74swFP3sJ2r8LSW6bcJQjSiYPXzjmerE2LYp5oVPR516Zev1ARihE6UnoBoLjR6evYHzfMXMWmBcTgwacqq",
  "key24": "287J9uZB73VEmvTJ5LZxgxL6nwochogoMjsGroPjkwyoFxuCHnVorPcc89z361u6URcD1SYDsgZsnfJdqPuHFXuD",
  "key25": "3ycMRw1hKxFNFYbtd4dbTJ33zSAvGEGwq1xz9YNmas597TZB4Xq7e8ZgTZS2WuzQXSqQYgfnqyTRQiF79GekA9Uz",
  "key26": "2VTEWcAsmcszB5dxku1tCgtCLE7WoSEhubCUz47F3vmXJSQmmVhTkUeuzLuQZCG87Dog3EeCu3nrvo9zbGK7JZZ9",
  "key27": "4xvoa5wNF3yzTGxog439Sq19L1PVepbW2tERjUUK35vSryRCLTokH2a94uUcpnVeHLS6oPvFug8AjUWqdXY8SK7G",
  "key28": "rHpDcPPWCfgCAaoDEfTNYPEgp218iUDtaHtsNzo8kYYcgCn1Hvt84XrwEPKDUvWHXNTSNKmfLo26iotKHrEHkrX",
  "key29": "5vXNhGQqHcTWc9HY7QgoJ55VCxbmAAthPvZrrRFjhtMdrmWnq3YwaX6pGCBe72gnzxSatEyE3scVLyNRkj5vqFZr"
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
