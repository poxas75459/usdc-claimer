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
    "2y4GrWiJDtqWf2WTmHTfrwgC6QFWom5VGXvLJg18BGg8hjbvYU93meWSTFngfnydAuYMzZ8YAU8bJCgFUaze73YV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PsM8wm3yqE1UumfmmvGMisA3FMpRtBv1mE2nUxFRkpRCkya6pGh34NEwBS5fP9Mtx8ZSQuAPJ79EMQxZNgmfw7",
  "key1": "5AQFoMfV5M1AQM5nSitjj4fvKradstDQcmyBjmaTqnYgNQ3xjEFZvFeu9EzP93CjKFTTgYenm3UVX7T6mMD6YeKm",
  "key2": "4jkcdPjUk1eojQg9sxRFfmRYTmAt7FcMeFdwM4aPssphzCY4C4oMfvQMxgmitUKMV9VP5Zy7UHvynGdi61mwqNpZ",
  "key3": "BMpLKW6x1GZxid2qfc2HGRMqxK7YBvgwUnZEkU7cDvRe6HpxULmn7Dukmd3yzgGtEA4tdv8E1BN1XADpFP36DDA",
  "key4": "2p4TbDsc5KaLMe39r2rK7GnJSUaKxrj1UzA9MpRaiZzhieRGDxWPFHKixvxydfjxW7nZhXdP1PEXF6Z1ERKx29WF",
  "key5": "4W2BjNq7H5G6iSNrcadxpVnM3BYAW25fNtV26RgjvjBsxxazZDiJ89CQ1Xdc8seuo964cQ6NK8E8cHtzTiwv54fN",
  "key6": "47bjcANQSmWgaeWSvTTeuevwVyPvXoXBEmChsqDV1v8oft6KdeSzJ2fX1wi1c35fCPwcnNU8DWu6zNdnTGyYCRQ9",
  "key7": "4bv6vsXxQHpSpnJRbX4pXfs8o6dKgXEXSBKXS63xYGXWMQLRVaVWt3c1K4tNnbj4J3SRx58DV2CEvFY8UmnHkoi6",
  "key8": "KRJjBWzhEs4UaWDsZEZfqDBfNde8dNQ8oenqWYFNFhikGCuHcHCS8Rg8BXnBU6csbZk1XN6zJ8aXcQQ59egnuNC",
  "key9": "2JPvsdwLTV2ACsvteafTz3vmaNXuqq1oPyRp9LwAobd9ydSujKnu4u4njpL35zZ165VaeG5VB1aC6CL7przvjJyH",
  "key10": "5AFjguM5Y7LgXN4qQ1vpCK7fsMiuVeCiTCXvTvd952GwDHqjF5StLrKb8uD96BimdBPhsuU2JZA3xRU1Hfk9j8Su",
  "key11": "44DHdYr8bUgSmY9nKsmmc2RT6rqFHEJWNqxAC1jRdbjj8XQqe8fnoNmaRpYbCGUM1esj4SHFTQuQrkWx8NYiAdVy",
  "key12": "4wtzRevdrUXTJ6TJejjjRY4sEnwPsDf9Nunto6echiTePLy8R9nCWgrgkQ7LEEKyNYCbbHtRnoNPgKHsZwW6GzsL",
  "key13": "5WXc9w89mhSoap2c5qrYJJxokeE1RkJavech2XSweU2W8m4HEWEuYRmRPJ7pzCh6VTz4H86irowfyb8D1v5DK8bG",
  "key14": "wNCnwP1A88qstQfoQ3brDcttDYi3rm6WjKGJ22DMks6h49eYLRbeAPRcCB1juEKmUx6kYUykc1F3AE3Hdpq4Ejs",
  "key15": "4T4FUEVW9AC2JF4XMNHoFsRJS5KciNtLMiBjrgJtJudkb57Cao1to8VVgLSxwyaqrVBJQvm3paovUXqFYJVTgiWo",
  "key16": "efi1x9URBDiNNTrGF1dCsnyDLHD1L3bD73g2c8eyS4K57VgDhDb4kH5f47URoAUFt1oicoj3WeTdrR9J5fbKCGa",
  "key17": "wbDn9QERM6KAAkWFBiwCuDvzSZuv6VoLeussabeDzUzeQWSKSKf4VdBbWTkruzs886vhGsQCZD4HC7KocypMX4B",
  "key18": "XcuDwVu5UWi71DAEMrLmBaFyD3ch3cdVikj5krSKpnfap46FMy93LchdYX6UGWTJcxJTzUmK94feCMGBhZaFoEC",
  "key19": "39Zyuap3wnfRwEsYLB5cJjHm5ZLfPzcB3cSiXU82VDfpC8fo9et6tTuaXwKKeZixnViPXnytge4eqMSXkSd7kKt9",
  "key20": "4h7kuidES2G9oAkz9dPxKcRpxaCu5NqspuDD4RT9SGw2Puw4RutCePihdtsMjGqBSWvZxTUTJJxP7m3hrhZseAVz",
  "key21": "3nBDngbSEM7B3Hg2N4C3P2QwwMQi2DWRwiwTUZS6mvDkDacKiRJztkvknG9fQdqbq3ST8LxmAxmKZTvGHLBJMkWH",
  "key22": "2aPSM93GwDqAwSYEnFDGkQkhqYwXLarQ2GQYHVQXx9UDCM4rag59tyMrqkesTgqAWdXYW67zct1nh7SkikAUog2W",
  "key23": "3ykAaF41XrijAbpt7XdeP5U7Gh9mWPQ8PegdVefPEyEA7WU4ikJzgox3MAc1iwnFHU1zdGWq2DoMTFSgNB1xYJiP",
  "key24": "4BbbNcbRpbGyqMueRKug3mdviM23Kw4pWYfKopdYZ5GHTbg6ueqVN9x1Qm499TRsDM5CUPEPcZFP9TWi1JBRUrsY",
  "key25": "3hSTwcBvjcCN1duAGPQdM2znDRp3E6T86cH8wE1C4hmy87Dkge58mEiL1D1piBNsgY8WrnPY2ZDAgLB3v7jfgqaF"
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
