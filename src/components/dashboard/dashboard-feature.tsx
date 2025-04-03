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
    "638iReCnaiAo5VZimQPxucHLtnvSLtZTHzXeQgovnrh8Hmgcs4N2PLwPTgFgPSjcnN4o5QMH2myKD8Z7yPqhBusR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zf1ou8UZwExgmKmuDxD3tmWRNBGBndECAJAC3pkHAJAAxPjCYCnXUnDdKgdB7MW9UTEYeipCe9M7CeexUQNKM11",
  "key1": "ZAPuR8zgKoCVCTuRLsTNujgcuH1KAR8dpxvW1UEsta1FqkhozqmUjBGfvMa2cJFUbL2geiapxCpKa9eYr9Yewog",
  "key2": "3a6wa3amZ3NHUjBKU7DD1pGoB57K9HwuiUmyMVLaTW12yR77NAGx6qzHCituKHPB6VAYiUpEdS3oArcGhHXuJuqN",
  "key3": "2gztKvV9Qb45RdxM2bESah7AKrDKLJRMbynuuWd81be744z7CpV94dpMYQjtAoDagwT7kj3wFA5F4yapovfoxrV7",
  "key4": "3WPcpCpb3L28TKBxNc9MUbAnTqwTwK2CRkJf5heZztux4bBNQhD6h3PomZyfeBHtCZau6yc4cGDnZLzuoYqwRNWk",
  "key5": "BCz69XFJck7QzfejzHR8MgMgzeuYeSJYegWFqddMByJGtsxDMsbmA5YAQtDhj6Y8si6Pmy3xydf36ZXBxDfMzoH",
  "key6": "23yQGhG55R5jgCHMDqwLjomSVey4fzEcUNzrY6aQ3Y6n4yQ9QpajqqjEVQXaYmfNDdLmTcwM7H6zp3jQUGo7CYkv",
  "key7": "2gj2fB9VZUS2d7y9wapWUKzE9cfLMDJvWQR5m7HtxjF5JMxHKEwzzqVnQ5yQdHREKcpKbZrdk14uFQckXnPfJnMq",
  "key8": "4ZBZ186Wjk48gMYAXg7ffUribp3MfvDo5GB88aGyZTJCvw9BErcP2dVbrbGJUhVYKAjFwwcDAFESjNJND6Dd7EJK",
  "key9": "5hm9vHPEVbXuMtCoi2PQTBzetdNyFy4UZtjGbyDR8ML4YSLWTebgDtgU97kkiHgrcZPNpKvChMNnJ87Nza8BHSr1",
  "key10": "62TDwpUfCWH3dLJAfWvDN9mNJ2pdg1zaLZ52NBuHHx19ti3y8aTxCeDVJucUJ5tfznM3nbTmZKau2GGcqpyud7zk",
  "key11": "4tzaNBoWbWT7WaFUkYmkZz8kH6cTNJa8uRNHQnyD6wKiLhJisifexxTyXypZR4DsmTJUbv4p71qWtESVjTmWw6aC",
  "key12": "3HT5D2BgXpKmWTx6URpdyMThn3hFfEHnqaosnW8hPXEH6ojD8EJHCzEoNeJjCeyjcqzXQGCjwBPzuehFswaYwYxN",
  "key13": "4hUjCTj8WQkSVCMqnymMSssyWwMoU3XPhSxmiiiQPL3Px5c4wTT9PvVhuyYs8VuA2rWJaFVsJedrKCwWFmhZcZ9H",
  "key14": "3xJ2kDcQjYe4ubGjQ2ACYnSXwBskEeSKFPdkCjosPPUJnRwApaarx77uKD5Eu3ybMJwmEYBi5jSuw86B1MokemJ7",
  "key15": "5iUC8h37ZcTci95e8V2NohA8nWtH3NLVSBHf6xjV96v7cFz8C79Rpr61zBKtqmxU3TG3isZP95WuzgU4RNKDsCC5",
  "key16": "29BsZSdKhNp4jsK9MqWHFqCvVmYWjM6rMAhHUJ1fLyj4GCs9asD62hfufFVfPf6kPDtTsNaLEz4TJb6G4zGTDkWE",
  "key17": "5KSyM6u6woogZ3iNzTHeV1sMvjpSZwgBWF2Y3gotCnEvcjYUpMX4LvLLovbkqqNW4SC7C3ojd1ChoVqF3EaLBsZf",
  "key18": "2VD7xgS1EiZiigMqqXGcTcAEPSFqJfzXVBi1d3QfUaNYWa5dUMpvEHbG3DBUJHGsnbNmZFaAU3Hfh78EZiR7D5Sr",
  "key19": "3hyGGH4uT4rjrMTi7Q6AfKR3mz5AMH5kKCH2bFigFnTMwDPuoSesSxeaZbhKiFxr5zNFpEEo7HNmjhBxS4joedfp",
  "key20": "hJaDvW1osY6M8Nc9GiV5JbxCafq1hxfmoP5Q1RfBKNdgEftvFJy5U658bydRPeVrUtonTcMoW2i85w44WBaWDX1",
  "key21": "BamcF99rYznUFuTTKVvctTHGRxqfpaAdAZQSSzz59wbscR8qrWYUECDSr4zYVmGZWYTafMMhiLgJuvs27WADwyp",
  "key22": "3PboBqZQ6pEHDaKVaEbbKvQUhB2TVQcqXax9KiK5JtmC5CBjQkmDL3wgVaCo6f4N7Cx3Zfy4ZaiHaTzohfMrKS8y",
  "key23": "4r4czNftSqNJ7FNRQtLWnVkSU9XbJKo3DouybnaNyXp1iSUYqE1LxYtaAnGYxTKBTpb8dcCwXLbKo2zMx7h3dyby",
  "key24": "4vhLoPPZtTaYBtfJ3wcFcGGEzNVK7XA8LqZ6NfYL1kKUu35h1LQt4bLnYt9ejAejM6KqSPAydanXdf2RSYtymgLS",
  "key25": "2FTWa5nLrNsAvfdm8Bf5GiF3Zz9KbuURENKyPMDrieREmMsqmfKm3zUFw51dtCukEvxnGkKaQubrx18zdhcazMGW",
  "key26": "3KnicsBRdeR9hFyyeYJbidFHXhS5QUtkxpZVoWsAr2Qj74PGQ2vRycehU4HLVmUgDoUEpArVUuxvuZ4CLR4N7MKs",
  "key27": "21L7Fvh5NkNaiNaz9MjNkSnme6sNZdvRD3vj3sfBzajZpJxgB64qzdFikqt6K7WuWqmsKW8V3WDwkW2E5zdmWfmE",
  "key28": "4dykSdyCMjTPrfe3yZ1axQjeYi9ZKsAyqrNbQASbJQ1dQw5nNbKJSEH2Z22n9wqTqTnDGoXSUQEkNrzf46GPrccR",
  "key29": "ebUKtEQVUwbFcUQzBL1UoRktwc5x8vRLPv1CdCfd7q15zeL9mG8rfaReiMyzB1m7AFzg6izkBHrXjDr1Vdgbw1z",
  "key30": "4i7E4q6uELgUA1V5sW1i3Sw75HBf4YJeiHfiZApLbN8n1Nx8r1tmkJ5Gf9GgwsAd1QtT2BZY2yDaEvmmMkQbohSX",
  "key31": "HvmvunLAFQs2vUu5Z6k7CBAMJNtED9GhiQsxVkhe6ghy1KseieSbURy76VmdgXK5GeFUR9GLF2XQAyr7forzXwR",
  "key32": "3dVGTibjPsAQrPyHiFt7VcPLQAWQ7vkgSkW1gFcbwUvfJjXy6kNqLxPSCcnwwcre3Y8h7b799d7pGYayM2bZbkoQ",
  "key33": "5yyDcg8CxKYGGgoYNG22cMidquKxSjDiFT8zcEk5zBookajypaPECCzACvhtQ4a5XsRKpug6CyFUeTKJ3jFWKwA8",
  "key34": "2S7DqxPbv8sEKJrcGvYDQ2W9anHPdqyVcZ6bmQBkUCrMMmEnDFKe3QWMA65e7dGtYDWEJGAGeJ4tpydJJXNkJJf3",
  "key35": "2KbcUUf5cEy2MPBgYaj5pjdoPcWq9fD5ooCMzPryt6jETUmsYFg8LWTjK4RQFUx7fJWkRMhRqUs1BDhHsCjsFU7T",
  "key36": "CasbCS37mZJyoSeyDf1Q9ZouQ6taf7XZpob1mssNaDe1ec56K1XsYtwjEiJVN8sffJTzAyfxJRWhc51uN4fukAd",
  "key37": "3un6oS34aJCExgxmG3qaiQ9KiP1UR1cteTQUZYJZT3t67GzeiyUonggWFV7X59vYna37DXYKTdRJMJfMcZEfvy8B",
  "key38": "7i7mQBTejnJMiQEor4gTbP2bqozwJopCsTbhjrnUTDVsymGRyMka5e21Z1DWieT3VeigKUxGw8ZDDjeEvQ2Srjw",
  "key39": "283iJtKFwrfK1RvEUM5B2anX5TUiR3i6VX2ZgsR7PVLKAnEbGfxuBFViEDnbn8tpRWnvAFWLcL6LUBvmgyFSLMsL",
  "key40": "gVFk8t4VhUCNWZqemvNUCe6SxwvJ6vTEZaTdrBubBdSR9xUZxZ2WFmE1mVJt9MV1fwE8Wvwpk2PG3T2rWVNuuUc",
  "key41": "4JWj9dvBA9ZQHsJ4axmTfSbbMtr2Atz3sGSRLW1hyfTLEFsP5noyXKGbT72nzxYNDgMQtR898jEcLeS9pnSEZZdM",
  "key42": "2wWrgCar9JR9BboWyJheGxgkwki8yqCQHcLhuyrFu9E77Qc5qFFBaSP7RmWZniGy4Y3iYS74kCwesfcGtTHZiwPP",
  "key43": "2cXgEYSLg4MGagxL9BSZtG2rT4xrS5dPz226Qc58ExdGjRfbBrBzqrVRnZK22YnKtq9LmZHyxz8Pao9VsHcJvLDH",
  "key44": "5VKEyhMmRZ2XLZb46UrVQ7obaee8bjXft4HGnYDS5Wo2ppBdrMY5SKKGaVGBJgp5RaEepULDE29kPwyjzhJgq5ZL",
  "key45": "5ZYkpmydKi7eet491PTD13BZvqym5Ywhx3V9jeXz3hgh4zdNR63NKtdEA3xBMqf1SHzUqAjMaxfzB7ZU6tMemRfK",
  "key46": "5BJ51QLysddZjCUSeVNvPo3Lz7Etm6DMdJ3mo5E8KwAS4X246CTj5uwmtqmxkNM8ZPhR9avfe2kkq6FJej42ATPh"
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
