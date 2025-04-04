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
    "AW5D3NZQ8xJuQ57Qj94wDrZZkN85UgUD8fZE54hmJ8Vj2B1fGyGW3DHMRoh5H9Jxpjwsp3cUq1se4HN9XStakAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFzzYDt15TLtGWMenC7ud2hDuh3BdsUrbdU68vjQELMeBtD4rfbGLSaZnngZBwwNuFSYkzU9z2CZ4Gksx372hTa",
  "key1": "4nXvJqvYNdDvT2uP8PzhFbJLS6vatQJVsWcfH2zEAHiSiWzNsvkArMzg7YLve1F3Nvd3EqdZRKBS7doi62i52zNS",
  "key2": "5BwVum2v7mhmDPDsPxXKbRpCHDWRqKsNSXhA1sBXwjzTZ4w4m9CkMwBomrzmtc4wZvrBogeFVh2oyvMBNxS5RRNM",
  "key3": "coKECoV6aNQkJCzEXKqLmXexV1pow5DWSx7rp2hSjSZ9fpWbtSDFNEXHFBNBQXC9EzsfTGzfx6CuTs8sJF1Xw78",
  "key4": "2SfNTYUDtyJeKm9UdgS97DrcczTRAGP2Nw5oD5ynHRNbmwubBBoDNEMwfydmqNq6rji3P2mLnSko81ShyyAUmxUn",
  "key5": "4dNMaq8z5v55LhRkd93FbHGphv4jtb2sc14RRT5vgomrzffbJQ8JZ1YFrybxSTm5bk9xU1a4Ue6SQqgaT81WoXkp",
  "key6": "e8X25nkurGk8BFgk8u8ToPrAveqqvQEx9v4PffdfUYzCTpBysC71sPJQxLqMWcBDofCrhauFNCRy8WExCmRN8vp",
  "key7": "3WX1HpspXBHPSCypSi88pHSJYCjwVvEZ49XXN5MsDRhcRKLu5RXmME7CNREfx1M3F64o6sMPvuJnApaoSuBc8XaG",
  "key8": "4CxuibEGGuCvBSsfWjn2jxfY4VoT86Ycf2DBqh4aN3LcsiCH5xUDoG6wSewsefE4UUKFXU9stx4Nn2y7SpHqzgDy",
  "key9": "4HKSFHQFk7AX5NUgyqvvVf1Wz2UcbUTtEa8XiAetGuNFzh6u2PPj1c8Y4yYWiT2VttzU7NXJ4YdvjJWaRmCrCVho",
  "key10": "32ufE7ZS567bYCzsSYskxyJnmQnghR4zsf8WUXpNG98GFotJUHepzxasZ87FyHZSfv9oxwqwbBw6DrHR4KxVDshv",
  "key11": "4CJv8VNaB9ibuFQ8kKuASEpdPJQ1nK12biw5TxGmhozsz6gnJUzsX7eFSjKf27dy6GhaL1UWvqGn38QSDwsX6dY4",
  "key12": "4u4unQR9hJEBmNe17s2PGJLt9SjAksP2T8hEQAoFMbaWphHFN3m6hwAqAbpnsL3FodNViHhgvrC8KAt1JJRctxDR",
  "key13": "58z1ErKtnsPJPKg4sTWjHZVk25EZHJCiuigB3tYwGjWSnCe7eqhCA3ApMe4HtY2wjZEB4TPnQGiETVTtdbWqkMb3",
  "key14": "4Gqp3xVY51kyTU8VWF7U757MA8PYVLqzMSVzmyHqwgh5zsAMBUvTbMBrW9tLvJrYQXKeL4ERj7nQeHyRBidYFbNu",
  "key15": "321u31rKMDad3DaZkCg16Ys356oFjLPA1efcz4wKfrURYpLkBwVi44M65uX5p8n9jPKtbCmNxRbZM6ExTyvUk1Ji",
  "key16": "4654kU8X7EXRfQrG5KebGXaFDP5396eNFGpdCWqTuu7rzDkDuLDfKo77jqx4s1XeRsY8qj5KtoBJCxeeHQNQ1chn",
  "key17": "2tB7unkd1ikpLDUdsSPyme6DiiZ1XotWCRLadTwAEUyyycwvesueURYDKEiVkg7FxwDCQ89B1LjQdUWTs4F5mJDs",
  "key18": "3dBPFT9M7cgEKkHQp56645d76p5XQmv8HyxvFE7bxUTf26Tcdg9RQ9B9UaiDekhKk5Sz3MoCrj9wZNbkvjBBZcSf",
  "key19": "47KDBb45HFxvxuZsat8LxH37pB2A3FrW2hQBuiNP5LGf5cBPxyiGjW4vFJpsSQTXLgVcrQbRoB9WnKXfB7S8czbU",
  "key20": "4qmy1cycV5SPhuqaW4HHySb6fckk7L5ckYRnKmbHH5cDQX59yc7va9EfCeeuCHpowXn1wxfvsNaXBPGZzGxMixns",
  "key21": "RFTEeNU7pTVBiXGY4KAeaVqNgmKjAnVcfPznovjc2vEtpy1Z127PzRHh3RAhKeaSMFf7vet4cBZV3vJVGnfcCCU",
  "key22": "B4M7CPaJ2YuvZwkLSyTyoFzCh2jppHYpMgdAmHopJvgQuH4vXaqwBbRs6wkJYKhwXP4QDSyHEVdmi9SWTfsonnp",
  "key23": "2giaxph28g8otakq587tnXReyGanbHpPRTny3YTAwmMqsGXrgP5svU8tcykRYpF8TX1CrpsLGc7JekS8jsyU2smx",
  "key24": "5kTcfbzbHHj9XjSKu7yJhaEBJ4pXv7oYdttvD9C9xtKvm27DyMLYEPudRK4ErrHiv3V7uvYxgWF2J6bT6iCoDjDL",
  "key25": "4JiVFNhJHE7JBqPuQYn3w7Eszm7RTTLgBABjgym9wq9hgt5yhpA63Bz9Gw7EGTJCaXBCa7FvGEFusJmkgnMZ3ssV",
  "key26": "3xoZFvAAj6FYU4Ei1gHMHi2oFD4XERmCaRbrDokLsH7zmcgVAc7LUDLz6n7zLbQt3AYrTpTUHhqyuynbN4anCYam",
  "key27": "38USAWYZVEhp1AuRA9QPwhMgsA9611TAvU4XZRuiGs7AHtiWvDMsD5RzBorQcH9oJCVczr6q6iKYvr9hyPuEkkAs",
  "key28": "2WfonqS4GpEWZ1WXVc9qDw5QsJ4vAYbnQneRkBcDXnSLKsUcfgrtNYAMaHXBCt1nf32RfwqCvonQpPmmadDw16rr",
  "key29": "4N1gCEsWCoTTDHC3XwaRghEqPGttDDKmc3v6geLYycf2N66jAJooF8oTqqD1fFDkciqaCxXmespKvkJ2fXWWTu3Z",
  "key30": "3sDTCU4UQJmmpoGDZL1uynPt24DiGuyXVVLBBX5dMzGYo3zm33XC1aB4eDR13Q93VPRSbJEdRsuSgAmTW8gzyT8j",
  "key31": "4NSr6b7CRZSfioPc3Du6199urXS2yMdUc498ns5HbiRPLS1tLKWsVwLVBeeMPo5RXYPsTYHceJ9TWo1PX2b1rgDJ",
  "key32": "3spkTbs93wY3oFMGg3TaFKVAe2zvMWBq7u5cV2ukRg4MgQcxNeuAx7JjW3cQ3wWZf2X7mLd1ccgtRCkS9rYsMgAd",
  "key33": "437HFsDxUSzxGJCqcjrRDmi84WXhJRPKg6XsPAmqvgn6Brs7JN9cxW4Cv1svckyvswYivm7rxS6sbPCMQFUBkBxu",
  "key34": "5YwvJ4BecwxHKGwFvwtUuGSqbHKQgwoZ3Vqe6kL983rJBn1bFs7xsjVGnfuEPA6wkFSGWywvNvbb5xhoTiaghcmz",
  "key35": "23nFD1zdSNsaQmnTS7Yg46CRz3uJPFthdK1dhsFpJdeFbHB73HrqMF4o3uGUrRcfD5wtz2JwJK4NC95ekcH6yXR2",
  "key36": "5WvzNVBseCGaB6hbT2asUEvyNg2H3U2YKW9VAHQkdT6sS4YjembzbKojU9xgDrVBMb6uztV7Mt4K55FFpbs7BEtk",
  "key37": "3u7on45DfDpeD1unAeYiVknaGneohHQXJS2mK55ZwGLd4dsUz8mnGZfoYGtR9jS7hDBgjBsuPi5Lq1U1Ta3iLqec",
  "key38": "2WxqocfsnFSViVDrg3fTQpirBuMoTzfcd2B1RpWRZ4SJdDCRk7s7Rwo92VvNRqXgxh6yQc8XJ5APbqjYHHCTGN9Q",
  "key39": "25fP1vkofWsL7C7nETCfCcuqCTwg18JnwJjqPCgFUAYrk81HrwY5EDPLiDwngzPQ561BEAS7jZCbTL8LWmagrvnu",
  "key40": "66EQSuKQCrpXQsMyneXUGph6gUD9K5k2Z8fE8xgFA2VXYz35U8HjnGHp7LhqhQ1xza9XL8HgNxvNA6kAKcsx1SRM",
  "key41": "2HNy7ANtnvkcgB5RSzLmgNYdQdd97EsXf2zMzkcPCFw1nuBNySwpfzNxFZHSon52gRuAMqdXXZoUu6cmic6cHJWk",
  "key42": "2v1VRQV5Y1FCLbxgCs1KjuB8UU5aejfdhByd4oYmCeSuntZ1pp7EejYSk6zL7CX9kXhxrEGnbxXZ9H38SUyMVJdC",
  "key43": "588KNrc8jDv7LBxCd9ryX9bQXe2V5b43yWu6gPvLCXwCP7DXpupv4oevXy3LigeTAwkxrHeextYmtwRfaPWXe3Vn",
  "key44": "38rjWbrUW29djwnBZTtQZXuWqGoczE7YHxuiwA1u9HDSHNRzNqT9tq92fEshxgmakz6xWc67vLVMCn1BFQjRt7zc",
  "key45": "3v35D7tkJwrVSn7UYVRFb42QHhHGJgmnhWdyr65ee7q1qXA2dJodi6qFrYArk64dDDYMsSkCkvz2b7KkCVp3fT4t",
  "key46": "27jnU6tvvUe7bRJYrfAf3Ry37cPo8huHgF8GqrH1TNubXWMYPuR1iBXMo28NP1F4JJLsqJuMowymsPsTrmoFGuNx",
  "key47": "3D3jkVSGEpFxs3hJuJz98nY7NrQegw8dGMsY9qoAY8A8ufLhYxJjYCn6GY4wJpUjFNwmEjQcomb8tghWRcecofWh",
  "key48": "3ymboZxzWv2QziUanRS8Rr7E1HUdRWrRUr4LpRP9ZmDcS3VrWTGz3QHTJTwre6gwXx1dWuWTSXxQYza1LvmruQPu",
  "key49": "53Qoxb9fFjFtRas96362rBCsfrwMDWDfodE84im3YVzQzSfnaS5SWRSUyCrufJNHdHH2X2B9pDGJaKcVNcPVBzH9"
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
