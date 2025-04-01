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
    "55nmWjoHVEeRdrd5mqfG8iRF9AJ6JPW7VUDwKEm6gLXpUrW2KNy1JcYA8K9SgdZ84eoWF7kMxMwfwKGrimHGY9Ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tr75VWjeEXyxD4J2HuK8qR4TLQcdxj2t7DxGzJbABuDmVpQwYr6EdoYA75H394D4UEcaUzaXuTgkMwtLTxe2bEB",
  "key1": "2hMznzTSnJVduJjwVWUMzyzKMeS21ZYkYxCjPB4PyPpdZx2v74Ubih2VKzxLvs1kquq1kzcbSfk1VMKMbC7BsSXd",
  "key2": "4x7h7hisSa4Jy9Mx54jXzpYcbhDM1ngLydRoEqHonjSqrtJdq7NgZ8CFJ7A3X2iR9QNFaLs2o3BLkoaDXmRbyn8T",
  "key3": "2gj9ecq12Lf4gGoV4yNN5DNACFi3xYEA5SMWcDEHnKhA6QknPVYJWkny8Z5UTaw1PgdyCKhbG1z5s4QWC6GMYuj8",
  "key4": "2ebSbDpckF31Hr5gWtYyxgd7Uh8kYi8JmDEKRJvzw4UNxffxsSpkZ2uZDf5iiCkXJvTv8Lzex7pta3xLUWrsg8Cg",
  "key5": "2qUTXi32CeW2XJrjhJcQ8hCJcNGG5d2jBWak9avJG9WWdJZBBw2APqTKiaiJAqJfGZ7taMr4Y6C5Yr6hFkpHTfT9",
  "key6": "5oPDJZ7hjJZKo3BKQS29fZE3BkrgA9Ui1WJCyhHzWEY3xD1YB7Ahmz8m7e9YASZddsi3B7fPrh3QXpiyYCWRGKsZ",
  "key7": "28KK4KGfMdzBWXaUec3kdYVNSvCWkdzHaHLsNFezbE2d6rsvyhjQs6aCs9LZwLvGt7FWg2HTTmnziZqbBbUm1hHa",
  "key8": "5tvWhJi88544yNquYWziK7GLEQReJqPtXJTUu7swAcJauT53UFvHZ1KZHmZR8wBhtnx6WSoH3VXcciFSAw2F7QmC",
  "key9": "3VH6zQgs3DMsap43sc52JEMPuqxeVB3NiWK2FwJRHdrYZAoGZqkua8VxLLSZPzzuLanaZVsZoyzZdhN6SXn8SXcU",
  "key10": "5UsocUxGAaFT4ecEKRVcSXD4RAA1zGKY9hjqPykc8Uxsw1mgPUYuSbHonYFDNK9yb9tpwyP9cnfSb3So47DkoU8v",
  "key11": "43p24u2GQcmDg9uJtvLoHvmkk8pUXGvprx3qpGn9qjaU2WLJQuo9vKWEN4V1wGKGa6TKTrTvr7NyytgiBRprzDfz",
  "key12": "2qGS1qwuY9aXBfCynLZJLV1HVHMdrAqKGgPVJKAaHHA2c86xKvvynkNuCY4iaxFpurbMm6152TiwZRD5jQ4xTEUU",
  "key13": "2BJ16bxww6okNvdg5GStC1jPLFQK5nNmQ6AB4zKjDzxMK7LhczAcoRh2ay8Z2Jnvvrb73sswycRbgNSvnjpC5fjB",
  "key14": "62fdrbjs8HhFu1zVtqXJT44LZLHrnTRmaHWdaQVncJQM2Z8ECdfH4t2ESsMQuWv9WwhbZHmrbZMhm4oFJT7NpMmj",
  "key15": "sd2wzhhvTR8525L1mHpvRzUTWJC1vKRHB1tmGCWXFSfPQ9T3DD1m8n22Dhn42cahpHCvdYMKAHKxpeVXV3oBwnM",
  "key16": "4CNrXr7h7GhdrrzR5iRWrNb3XjTQ6u33X6EuPJkBct2JvAPzy2jbovs73s7WGUDpNrK19Cpza5uC9CMf62HjSkvU",
  "key17": "wR8VKK5jHs5pSjMinfPFJngMKW6rDWEwPamzMRLJVYhi7NWWwecdXmX39SHuwEWiefpxtpXfjYX2jiu8uvW6Nwz",
  "key18": "3dEz1y7tHqaQoYqFcYnQpymZYRWDaTdba5SpNhFmvtpgKtcw6EKHhbSErD4XL3otSBdxxcFU7KDNrcFUFyLv3HBT",
  "key19": "5xxVpxHPNgFHyXLdces4LxYz4gi9Vw3j9bXjMyWNwdPMQXBH2phHZjieW6f3jPTUnV3ATf2kSk7jMn7FvojVJK7g",
  "key20": "2nvKqGPtsVktALWAj14me5PFZeH7jr6oMScKFQLwDMK8Ei2o6jb7Ej8dxQZRr2VixQdzKZaUodEoEZxxJceVp2r7",
  "key21": "nc3mvYEyDx4A3nN8Q9AxtMAmKhsv4AwbAJG4b9aJJwvAy6ThhPbP18YXL84fR4qULhKNaCZMThGdiuXBh3EJhcJ",
  "key22": "5axjrU4uQU7YjbdHn1edkZpkTjLEUfkeiHth6PQChbixrkwRoXjPmwkUmzAqF7yhruKykxBRa3u3wetGvcw7tsbz",
  "key23": "LBL9V2xyS34kNujX7P3Mtef6Yn2niGovJwsTRPDWJAWpNLoNTcsWFSi7xA24uCTcQzUgAEhopfm3xGArD6QZwTD",
  "key24": "61jBBppuh5YNXrBYUr3wTBSVgPdypPCnpTCchXHfGgw9ZeUkUvHjjek2yrLu1h7vEYNndwZs8LNCc44wYiZVotRX",
  "key25": "45LJGa71mjUEBdys95wsJhDrsu7nFfTVjshcVhTed3BcdY84PbXCRfVN4mei6Ai25bRug3GcqpRexByp7pVDenyN",
  "key26": "6Za94sMyFixwgoobrryvkkeSwCKqTXUPe2FpXwPspzDrKYN3hpbdAKudLHsWye5UVX7fGo3nVK8rzwCfEUEWFzM",
  "key27": "w5jaGvVPK1CohkCtzQ4S6pzhSqeLkcZiMEkhM9yN9DmbvcoYZk1UsZH7pbxqoWmmWZ9sSCK2Ynbf7Cd2y4frwHE",
  "key28": "59CtnD1iH1xDksL6tJ5w9hPJ8SQHoSJCitWKqtQne9q2JL5wc5umT5s5mw1KGiMg1dXscn9rSnrbzcumUDyGKvMc",
  "key29": "3zu2nH5AtEp4PrXMWDuiaFFbCZrNoRC6JpFt5GPruVsngPx8NTT7B6p1FkpvBdoF2H3veVv3dSGkAaB4ve4BsgYt",
  "key30": "5UQ3Jh48XTPFXeE2ccMTEPztKPxAXxvzu7YXkSjHwzLiKhS7UkjnE1Ainw8aTyLjWLMxFjGavXfvo8ek7gs6zt1V",
  "key31": "295gxCiK4RhoNFnF4wE1eFcYSke32b9YPRb6e8TRwbqcVJARa1b9QdExatxY2dxFEhxRmF18G9UT5mjQDjQRKKMY",
  "key32": "2mKY1rrkDikJFHu5sN27EfNB64z5nvqpXXSZdnkpBFheaJGcbAP6KzPMr1tPGoutwwdJnC1kKsL99Be6WGYm2sQ8",
  "key33": "VELK6gRBh7gQFUJ9fnpEJyWxXKoSdm7c4F7oskt2TSQqvMQgD9HpUZtMAtAQ3fAxti6gwBttjuRbGxAKD8D3737",
  "key34": "2M1U99DX5hBSvYHFBHgCYb7uWkNGPXf1R3HzwofiWuiV7dqgNNLAMpmmGB1iMPYuhm1EA5HdWDwVaZ3toKbDXi1n",
  "key35": "5MRcxiuQRZMqwqmdN2nvyV3PNSVPEWE5cJGrvHnDQ64q2gxsH2nvsB26XMZUsHDsh1pFHBBpfWjSF6fCFenCLHkr",
  "key36": "3JsEgh67BEoBi7CUsTjaKbpDgAqLVfDdayxN25A21VF3UzEmrdmxubULibWXbyhbbJCkMkCh3YW8C4DyDAK976mK",
  "key37": "2m52gvVfTGAQ9iiDvLFz8kweTpn8scqut2FqheMZ7tfppXMnhCTruaLDDygZ6qEhTvUMfgvdUwwJUJYYzCq4Gjy7",
  "key38": "5NJjrTZaMvxuhHWxNBDyN3AUgUzaEgEDNuvwCvxas4p11AmBvWA1cH4C29qRd1GB9nNW3JkF4stJSK3BngSzeT4S",
  "key39": "4bBhei3ckgLuh17XFzVM9gKdGK4c65UtqRmab2nDhSm8rAxFGobDcvVxjSTzH6duQmNKq5Tv6aZrHdWAd8ViVAue",
  "key40": "5kbdn9tsY15ELjSutngaXHStcfSHaVoFJBWTgAAcbTMZkThbKYSJTybBsdGR2KsJQiTcsW6ECVzjeY6TYF9XLYCN",
  "key41": "4iecGCeNak6UrpCBXPz59FpsdfpWd8yiAYihbPnicUGCt5RmpstPM775fkbsfjCidoedWFL6xPvaLXbtuSSVNdWG",
  "key42": "3GBVX9bjx7SLAwLhorbFnxkEceCLciK4585ZKdQF8Tp8ZjHkWBdertpbbkLnLowmRLgonMVNVyhi43hKAxPSfNB8",
  "key43": "HCUU2ePjLamUUU36AXunRQyZNe1cBcEcLE2kgpK58SpfQkAz6Zcwapsbf6jTf27gzLVFZaFNYYsD5nPBweTFWKM",
  "key44": "FwNxKuMe8yNstzs9sF6oHkNx1gAinpiqkCGKYUcvBnk5aoJVXzGVAMKz8SJKBhnREnd76n8WjiCZBYVhuBhWqrx",
  "key45": "3DqBXhopGyqm8KYfZSBWtxjreuedVnYPdBMQi1NdbwJBRWLckJc83ftbzjMwa7AHtTKwYSziqQv1tXcVm2mPnWgo",
  "key46": "4ZJe5wYxsVkSxPBarimJWAksExVWaAtkLVHeVJy69QUTgtgptifJptQBuee9WMc7kzD1BPwdzea9vs3zcxRE6YJE"
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
