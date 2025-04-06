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
    "2737ZdipKyQReFy74tSbmdq8wtDgcNTBwp74GrnhqBJS1oixCMNqz7aevVcaS9nhajA4cuKzgaRnUXn7pfBxygbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4413sR9gaLtCraSQ7WKVL5mPJK4NMseje5XnAJ8k5SYhaRmAdPdpetJNk35VneRSwva9qCWbZjYEgHQnVFZKmMuC",
  "key1": "2CzhxAmB57MZ37C7pdn6wRAGYQiAmRuc8PSfw56DvDXhKEfbEV7P76QJxqdmpAqn5QTdNAQh2rhAzEVzq2XHVKPz",
  "key2": "a9PSWdhCa5Bxq7JAMMAigAKerRfHVLKysCMq4vFR5poz7FciYW8oXE7B9Ys3vYgzNwTEZcLhdm7EUNAhmzg7u6j",
  "key3": "5bKGuPCtGjHm244AXbW1tiVXgP6TwXrzrH7ALBdwjtBdYtADXnfccNjg9o19ujsBHGftDqRo67Wnv1cqV5Epy8F6",
  "key4": "2kAQtCpV29KALZHv1MiMLHFBGrZYnuBFGotjM6uHYN5SMdt16Q7vtDAVVKH6kiV7WYXpAQzQSFfnpxe7n6N8H1Fx",
  "key5": "3wpKWgemk7jHTxLZ11mU8GUryTQXzRxTKRfpx3vMFs6R1CFaGyXaLf4tAo14mxrRAvCKdfYnNQ8WiHH2j5btvPPt",
  "key6": "sLXCJQdbMqo7onA1c7cMMrjXH5u4vZfZB66iGYdAygKpVki2EHABBsXc8RBpftv9gDBshQygGDST5poFKteFciz",
  "key7": "5YGTdVjapvYjSqaWxtdXazxnVcSECP1qU7vBBvkPc95g6y9K856FnKRdbT1EwaHpsQ7eMVqBHoC3xRmNwZfRibv9",
  "key8": "5ZraNG7vapw19n3e9mTSERQDjrtEYBHSeUeQHKM4d7dJG3AYPVGptHpCmqF795WoZYTdTN73bvrvGj5xbTrGK1Bx",
  "key9": "5g21UM6dCVZygEZ1w493S5qhHDvucVQEG4KAbVKRStKLLgXUX49E1pAuCKnKN3A6uAR5bYkjDdeKRLpj9xogP9Je",
  "key10": "2oB1L3ra4QecqmshLf2oynyWUtdnSzxdzMWvhYFLXjQnPfRB1sbHzqVnNWhgkNRhSn9LPgToNaZykM582XkNzvzy",
  "key11": "4J4h8T95aKSmCHxbFGJrroW8X7LmyqJFa8gTua2kkAF57hfNJukSmEEa12E7jC3zPyeXDt3KsUA4guNcFXWErXJ7",
  "key12": "4iK7zwweDxvriEMZ35H2Zs3gqKcxejVDUeBzad8CkTeKDddGhmBSgeHW7hxn426VxqqoaX93o3h7WZmJBiYbQED2",
  "key13": "4BGAWK9Bp2Hzab2HQda12FmfTieniQ8D7RKaLdyEAFi26WDPYEiXfX8rT3akFrnxkbUtvjqK99Z1LFdXcCePxncL",
  "key14": "hABww4vdVUuYnc4FhABrxhQfbkpY6W4gdYXDD3uidXuXJDH1YS63xv9cDZHDsXzcrUDTB44ZcimRSurmdfSoE75",
  "key15": "5nnAjunauMKuywDCN2oLBGQ9tHJiqwNrdswxosRwUF5eARN54VL2NCy9rYqqxPjD9NnUaxNSyHcbdpeU3S5NH6sd",
  "key16": "QJ3Gf67Ntdc2tyHNSECze7nAJvHfTTysc7Md919oWLKs9WN2rwE97mfKu6qGBJk2utrVimWneTmRLk2aheLpF6z",
  "key17": "9citGhzTZ6Nd6RxQWqQ4TvMsHJixB2GCpnH7Ay9ejPWvtkaKP8G77kXLkHdxwrivuGY7ozY82fyGeLiW3LrNdAN",
  "key18": "4vgDZvnXZ7PcG2XtakDaamGbiWRKTcxWr72MhEnUjwE2VPZkejNbAmhpR5z2MHbEAHKdosyvF64YTEX5AP6zdWLV",
  "key19": "4VmE4mS1v4zM5RCrvDL2uZR7Qavu3bxtunsTSb3MzbMCz8DN8eRAkrtroXeFVEgEdeygJm3CFgdEshyvBkRtU3Na",
  "key20": "2EVioAqqUmu8vKB1nFJeiXS28BH9xbFcK9NRsZbLfSzf1aHEaPqp7gjHBv9WV4pkBdR72uj7BTFYU4PLFhDFZXo9",
  "key21": "3uDnroUG8GR25BWyXnT26vzt7RDGkDML8Mu19uLqKFm5tKhpsW76Yv4he3GxMGJCnNNm7dAtcY5czD6yELw7hvMk",
  "key22": "4Jeh4DDGgsoMi6PSYu2BbJGxpCCXgpYj4FKajBsMQWy6RL6sxNoU1UzZA9C4c8mtwriyVjU7iDv5oxvghDZwFf85",
  "key23": "2KEsgXFTzgcAKACnmFtLi9J1vqc8QnWmzwR1wbsKcyWUS9EaRAdQ5ELzq5Nyc5cNSZGvYcX2Q3HeoYsixwvRWGRo",
  "key24": "2W3XsGZbcHGajGnnzcYfUYZfhGd2g3jsKC7C3dzAAugfmKje9TjzmKEvJU2YNq68wfkgY5DRxfLso9Xk1YdfstQp",
  "key25": "2c9mDptXbzvJCHVKcjZVgsRbNENBYAe5Pv6JvGfe39A4mr3Ygh8gHHWYHfr5WD7wonYWTUMwbkcHvFqwDJfcb4wC",
  "key26": "4jLsDr2cDHmG9NuCvMrufMFSx2GWCMwfDBu7KDk68uj1Pi7zccXw152UyWsGfRvLEfHMznoZAC7gBo6PccXRApCV",
  "key27": "7wW3AS3Ch2LEo8ADKbpazSbku3jag8GwSeabBHRuz6nxAjpS38EUVm6oPBipTYTzJW7HF4WPK4LBHkvMzqVimUu",
  "key28": "2SVpcJ5JxwR1ZL76rXPjAbHPNMo9BFhqJQR62JJWW7QrPtKi6UdXfqdwju5z7zpW9i7yBaGwSNXxt7cJW5LqSqLq",
  "key29": "65pTpLcMjayfAuNmrAh6SFRxoEH45gcuhfbGNDVPb3fSvQkTC8c9sh8ZkfrDHoiHxXhNtCdmq68dLHkkboDiFMwn",
  "key30": "2Z4tLFyoK7fEe8EH8Hg5LNvUUjcYR5v9pRe5cnZ3AixLpo8qJwYCeZ8jbErmT2mh5Bz1VdxCd6uhq2DqiommMmTH",
  "key31": "4xNgPF4PGZnC2GNnMnHjEAqhs9uf74sGcbMKq4qqpBzTmr9XXkVwWx7PkKA3ptBpsXgzqjHtAi7H51YTYoKQfMLC",
  "key32": "2AVWncuyMWcQawThm7odgCKyEmJTMvAQfNxEEtmwR8vxu87ZxFJLSSCvVYkNQdqjbvbEnsZg6ubdpqwrGazfEKBG",
  "key33": "4kDe3wvdzRB9GEDLetZPcSvdKUg2zPgsAp5hfPFXfqdZaRaX3g4paWqZDFrxaYyS4UaZUTVUUTxoHYgnPAFZAUUq",
  "key34": "5BWiikmVF3K1FWzuAZKXwqWnnxUxVnixSzY9fj5Xkn6RecuupJiwh1pwG1G4Njt8hhKNw8SsyR6zzW7upKMTF1Fr"
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
