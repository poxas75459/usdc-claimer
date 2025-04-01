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
    "64hKuaD3T7982uJtvo7Zy1NNYDZ2MUbKK6sFeQuJhbPwuenKs2tkZkagXjLSEJCcHNz6V32jkPLhz8C1GPtwY4wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQcdrF4NzRAoDVcE8qPeNpAnQv5unKe981AEmA2X4SuiV5ebuSndVfh23ww2XZU2dpAZPsUuHS6b59nuNW5RYhR",
  "key1": "59A9hscdfS7m5uYmDpraapRuxw9RHnbP9H3zYTKoWJMrkhJ9Z8CUr4vAsRJXQGVmGu7Dgd3PAQNtzNRqS1qTdwQu",
  "key2": "5rfapsHRvKLGvyhQ9Wav7BLtFK8XAGA8VrqC7FxytJcL8CbcUVSqzBk24iUDDGaCEBm1MhxvBaQziwLo3xEkMhU5",
  "key3": "NSAs4F6kNKcNY2UQoubTN1zRPetKG75eXkH6tzpQA8Eh33icVitzn8zzRCajeVYD6icUHaEkqmU3S3YRZrFjQNU",
  "key4": "51St1pCvNirgmfCYWyNztBU5rvCYqapJxTPLvHFBgKv1un5KzsmLSjyEMxodCN2dxytsVme2XYYH4xKN2DJW7BGs",
  "key5": "29fxGb47QtqVchGCp16qJKnwvhy5HdCpGnhgfUx2cZpEoLRsASrkYiYL6eRrtBLjJeK6XYedSuopMCtkS2S2ikKb",
  "key6": "5Ubcyw1dzQfSX96R2MSH7xU6zRGH3X2hqmaERLitu7FLXVTi8BKa5knp5HQBytrmmsz1xZFtd2JKvkApGcmyR8fY",
  "key7": "3SkuLKxzrSNXmLkYNQQsre3N7vBWy3W7WiySZvieXYLxkU9jPurbsntzFn1PctPri4hYuoJCXWbcmtfjdKtpKxba",
  "key8": "4b3HwMKNj72gawnyX53vqxAsgCSZJfD9oUCPNU1hojXsxesUMzay4ndZfXESGXa5xTWCU8s5zjPeJaHF2M4GGRaC",
  "key9": "4TrkvYPE2y4qDLbDrPDMojmMbGKLg4xNoDnKrS9paDoeVpvZwwHbXGvzNNb51txdXLMvjCQvTovsve5C2RQknLFs",
  "key10": "5ujnh8YHbScxz3iZsWjyNTpXRvWK5DDntggA2fTFdHLSh21EAYsWBkXQLwZ9PEks9MMuxPx7MeeajdbGxXKbsgdH",
  "key11": "2tHJZ4id7CqQiqvuSdtCCs2z2DZRFRABQzmHkS5hexnErusYSonwmh4znDZcFNygAwqYrFo1A3RzJrHf8xedxf4m",
  "key12": "3eJSQH9QZutcZZFUt6FCsDyGam23AguRBN9AmfPkRBgxDf4cptwMAV1hiHE4aDUFtQhqWFncwZBVPNnHv4mnBjVy",
  "key13": "jQgY8bmQMsba4nEQN3xQZfH4b2MEYLf8PArZXmw9n5xT1mbAJF4yxpXXi426F83rdrBPw5hpQAktzrnmH6d7tdh",
  "key14": "3ZELECUnTwDrXuYcxdqS94X3eDU8WUwapg1umENZLzLEKNgu2MR6HirmJ1ukEjeX6TYWJYchN3jiwxjsbvpDkFED",
  "key15": "2CG3opiUC5wio3C6dfMwTq3jysDGHG1BZPE9NdWHaoZUdfNd8VWPQsRSbZTe63j8NeVLTb3wGQkgHntS77MEN3rC",
  "key16": "3BG7tYDyCfaASjot7oPr7LWHUYQTMLRzyykuQqtAYUap7qHVdTuBQA3NG6gMn4MHTf8FLWjM4NfDjbSygeACnB2g",
  "key17": "3Y3NEAVoXR62hNGmcMvA1CFE4sAt386HmfkRPEeAx63Xe9FKUCrEptUFXcqgDR5117dvMxDCBercxM6fwNnnzT6E",
  "key18": "54kLorVGfuYfUQaMZHU2Cz7JShJeaA1CL37dGAs6bTB2pS9GbumrwjEBkXwagDJcaYuAxhsLWYizcDs9d2de2AWE",
  "key19": "4iScgDrNw5TFppJ2Bxeky55v8ru1GubiTkfdVbMxNWWFNfoUWkdEveGTimr2S3aW5PzzdxLpdfisYxog3v4FkbR7",
  "key20": "5zcsGwqtHcXS4z5SpnGQUBKf9R3FKvDM2TxS7rnXeAdajLhwXitLhqqdfDVKv87vF7foXdtV7NDNGVRgYxkNxqng",
  "key21": "4ZdGC4S7DKXuoME4Rd9aNLQNZXhtrLCZUJu9DZnfKFECmiQSBQo3Y6TxVZdCeqxUAUiEnYv8MAwZGUgwD2t83kfS",
  "key22": "3D549VmRneUrgzJSuQCtTHMZNK7QhbT5uHSf6cWdq66W8Kc7A6rN255HExEpVp5YmFcomdzipGHEcBgGDZ9A4Swf",
  "key23": "47t6uryov7NVkoC2dPBzdvpHZmKsCDx3HUoKB3gTtDM8MLtW7F6D821f7y1i1uN2c1WpxSaqDFHdHd6cH7caYPPk",
  "key24": "4zNFAVWBr1EZoBJumh5yvbBMHiPVFGgc4SPFG8RG1vF81P5ruDxM2C2SHAmxDaQVgGP5a4LNyW9ct8Neg6QGQMS",
  "key25": "48Jkb5ecg4bYP5wBGqT6ik8MdrFV4AvBmX1VpauCeqmpi6n3mWtyufiftYs5qdvpPfAAiQDob1gp3nFqq8oMEMgK",
  "key26": "3x7Nvyq948TP3JRfy8uaHtYPASmR1cT5ae3UhQVyP4RJitMJf4iKy3jy2HSGVfoQM4T94QVgiafZUfk48enY16Lt",
  "key27": "4Tt3TANBEc6Q8J2tE45vByJSnToUx8fXSDLQ82BzMeLn9zUvZeHBJdpnDbepFJG6pSvBwgdVx7ULhzrsMdnrzTNi",
  "key28": "5PQX2WAWNm2k63hP4wQqqcprCwdiwZJ3FDz3gXtV86rc5K31up81yBVUZZyoD3R4dzeoLrhFF99ZDwNctsmcmTmB"
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
