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
    "2bgbW2ucCrWttBBGNnJuRWZVEdX3TYCiNCsBRuuBqpEZEPgAK98LfvpPdvaM8R1CPtLJd17GrfRm5d863kTLbq9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wbne19pUMdQTb9i4sXN9UaeFAyoVbyJHsnJ2uoCuxuvS3nmY6avuK5rYoNpfBUDJ9kb8Dg42Ub4yNBxA1Da9Cfp",
  "key1": "2BhF8fCLx79GgUyPgaL4Rcjt5iPJbDuVBHW13k3T9bAukuWRt9BXveXV6KAsony7N9TDfHai8Z7PuinZZbiF6hkA",
  "key2": "fWX5L81QiEnhig1jX9T1YTMGz4gxXcz1CWmgskjUN4xgcRkLPtq8WpB2mypXWCgiaRd13TN1vbN69Sosa76jRVE",
  "key3": "4z9FT2SQDyNtatX7TbCeCXgfxNHGk7wfP5Fq2iXFhEoK9YSxZneN9y3RkVxPzD1WeswPzz2vqBRTNs3cJaGCZZeR",
  "key4": "3Bfp4XdqU9yYfEJUzDm3b9FxzkvZVtE2cTDf2wqWkTpKsWH6J2EVgXueQJJvVLsxX3FsAVE86v7ng8QGruqYsxTY",
  "key5": "5o9ch6UyrvwXBAvQbLmZtko24jP1Uv3bs8puDJZCL925kzXPt73vgQz4NQ3kGd8sjH5vzyry8THE2KwkNG44Puwe",
  "key6": "Qg1o5XegnrBYMH1BXv7mbYwjWNkY2RUvTMUvF8WsfE6zaVgCSQQqsC67GWA5BgTn4pPQWKRYDDE95BQkhff4tkw",
  "key7": "mvvb41srd3Aefy1fSKcYwWzHBfXTLEt4Lx8rA6MNovhZRSCacaSYvNtFEYSjNXZNBqooLmMeU7N6EPjBExadyTr",
  "key8": "5Q5bxyAd7augnwdUiFY9aHuekKbtrhGMXkPuZT7PbPGExEzvbAfbWK5jQwQhjy6znKoQHAtaevQDiMhi8bUz9Xu",
  "key9": "5KYprd5w8DAukkpaW4dwvFFcKaL3ExUYjnr3YfA3gC62ANEhhMyvZPYjxk8NoHPjoLa4iGvHpm8h7VNjTug8KNpf",
  "key10": "5RVGXg3ArnueADXeywF6mbLio4wms2qYyGyi63ZDTVhUzXTRNSR1FuLvfQjGtxGJ9cTE52kno8c2FoJVvxfoHpPU",
  "key11": "3hEaxieqypY9KrYBAq1g6ERhSX3uv9acGMLew8FG3FhNepXNzWUQun9h75naQDp5TULcx2kS7cnKZAE72AEbRAjg",
  "key12": "4mrqy36wiwYdKyeUQYqC9JDWVRkPoTMtQN2nonNuC3GRyUFasekxTpQyrAgZR4n8a6dxTfc5wNiwyzYn5uVPCTmh",
  "key13": "2eVVzLZsKao9xi5jJZXRQwdX5PT5Qg5PrB57g8MQPGhPg2ck4JXJ94U6gWGnG9nsacY1gxNYsorqGchtciGBguY9",
  "key14": "5UpQxYMHAdwwN2jvbADr1UDowQXzRNuXHBN3CYAFE1srm2knfXaWkun4aVoH1YsVrTVFnBCWNQSr9fg7Dv41GWa7",
  "key15": "4158HU624M6qgBqGrHAL9R9oMLmujMFoiKM5EAGGnpK44HfjRwQxeQq3c7WnLwNQUzTH9raKR9uGNLhfnUb7AFZX",
  "key16": "65X4xvLnEAYTkv5BbsCYcorJkBAwGPjdKnFFrEitkKxRsWBJuJsdwVoKwe45bW9MEvg2H4x6AGPdWiC1W7yGaYvj",
  "key17": "8XBKBGNdwATkMN4tQQ9hm7cB8C4cgNXXJkhHopoXteBq5T8XaEFqMdHfEg1MTf9vPSVvMknUtAe71QATcsLpnE8",
  "key18": "3CMx6pNQf5UKqETFdkPz5i9XRLPMFoewjcGxG7fSf1b4vEbKLF9h1dKEUWzPnqtYT8vTkn3K98bbfsZwA7eZSney",
  "key19": "4MXFEaDd2xcDZSmD3AXH3y9XqrMSxnZ43drrLF3rEwNXfVFpNFkMfA3YMcPqjAHk8G8oBdEZFrdJxejTpRdLmgAx",
  "key20": "3juMzZgxmh9cedvsw444fLarV16UwhGpThUTYdf36NrP5WPHRaPTTnuJGzCzbHFtRQqMHFyhhaosNTgtpFevZJAf",
  "key21": "2Gc4R6UHmgCnHh6EgcgTPrGh4fjgjNBvbozTJsjnjiFyYh49SCdmDH14nCVTr7HsvQSHF4QZtP9ASCRc16HoYW2J",
  "key22": "5RSwMz6PMiZE7hHEZBnfXdsmqg34eCUm4pzGedvhEFvKMGHyCpUBGaVKEbvZtGcW19jhRkLRtHxEsdFdsZcYC8Qe",
  "key23": "FzpkcJm52Fxrkc1UfqnADuwFeCDZ5DfB1V61VxeEajfXsx7HHyrNP1xbReebJ7UWZKgcQUQx11wXDsrxC5VYGrH",
  "key24": "4LWPaD1G2enHnEQumWt21xNucYHb92UncKMLME1N5PAax18McRNBxFweTXHqHFXwEFMXiA1u2j1NwKDzie7myfWa",
  "key25": "4LNedTBUVRWqMsrSfCBSVfCzGhUXtGJP3wXXxfyzRZkNE7FcenLt2CkxJoFHg3NQJxv1xHH4enL2bk8cvC78f9js",
  "key26": "3ZDwhk8veSMu7Xj5HUcjcbF2K3aGttUANWRNW3GMUottadajztEHVNeQBAcowTLjPGWugHxFNS1X7aTMQMt2F848"
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
