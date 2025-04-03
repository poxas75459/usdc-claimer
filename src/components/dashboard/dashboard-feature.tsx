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
    "5JEbcSpFLQpgATNFwS3cKSsaNUSgjEYiLHf2iQAfD9PAF8QtP5xt6zjPTGPALiPj4xBophJTuAHGVyFhQVKgpHLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUPBrwuRVnVmWQV84NzVAgdszH3A1QVAEkfKhJ83rs65mkXQazVag3fkyEByrEDG3PbWiq93eL7nEv6ALAVnTUP",
  "key1": "5TyTZ1QYt44yDXDfMSYGsVVxx6kX9nGE8pTD5knyUvWasf3YiNL1X6AVJrHGetjfMzmxGr3PqXp3F595Sk3kZZxT",
  "key2": "5sAzhp9U6ZP9d95VGYLZ2NSFQpwKB6ZjqRW1kEv1pgvuUiewCzjcKyRaYq8jSNbTrhRZuWFgZGtQgdkVzEyDASr3",
  "key3": "22rxJ4EcpJ1j2h71XkfaqvyEpD9yChKwwW9zf4Ry3rmc2tu7tjXZ7TVeYSjcPvgaGdgbaUb6P6VjPMyM2j4nx27U",
  "key4": "5YuNmFDAox6YGLbfPMbCi3XHz9L9U9vhe9qr5jKZh5pj4ShtRqBZrFwNVh7T1UheZppWaTsvRXATbhtsCsUD47Aq",
  "key5": "NoqGnAyqMM9toPFoEzugxqEKW4AJqG1VKSvnuqQCkocVZgt8WcLjjseQAnLAY3zcPo1URWvcHFyZ6rPRVP6a9tX",
  "key6": "2XdXu8K9Hx4dbP7j5tkiKMrhhWeRfc2FD5wiiigEhm6YWXtEVFzv3iXsz8YJsN6fo5mqLYsGohMYZcAbUaz45bTE",
  "key7": "2GtaCGkpQetmr9imJFBjEBeAnebE6T1PGTCX8jSYw8GMJ7FiopFyPvzWNTqPFw6dFiPrXqQrbGPVqTKFmemsWQL2",
  "key8": "5t3fiGQgxM5PYSyBCGay6qeebFKyZr6Kur5fuVrRZFABHpF5mfL9tTk1Kz1jVQw1wLdJxxBSMEBoydNdpxBiD4fH",
  "key9": "5Yodno1HeDFcHKNfAQrNiAMQPpittVdz7J26VrCKdhxGij9YVasjyUzT1RaMiKhUYHfcFETmHQERfRWjCcaAz7fk",
  "key10": "ZNAVSqiFoFmm518e25wwxYaDTr1wG4d3x7WKeFefpfviCvanKcRWpTDRbz6tNhKKfhhwgEQ1nm4ZYt9bnR95gRE",
  "key11": "2L2wMR4pukjYiai4BYKGqfGGhYaSH9gpECGN5eCEUpZy2yAXFwPdRkjEc1sEubhrr7KwtqTPG7kACDgiU3zc2Dub",
  "key12": "2GsmQuv3xSmFW7Tv47iHCXpLy38EzjqnBPMqtXBEW4Za253eFX5NhJq9bySoupa1TgVkNYPpZqBrcGrGUBXp5Dkn",
  "key13": "2Ut3NCNxqw7yLJyadGDydibahVvY1AWv53sMQqp8DaiyzURyQrVUVySxxxm2jgVK1kfbxz2fngAMshSEX5nZFbWa",
  "key14": "aE6Krdmjr4WbzrWS64U4VvdHvZFDrPoWwMyCfYcGASPEkntsQ3kbAocnEBvZmA13gaPJYwfMSjuEjRKd3MmC1Yk",
  "key15": "4QD5f7AfctbdiSNEBojkA3iDrRsVzkELMucTny1y9v2nbZZzZLuqWuNYhzxh8yNnPvGE33MeofH34thqt91fvBp6",
  "key16": "5vHK5XoR731kwvfL74nZn4Gn1YFTha7eTswiaVwdL7oXs6NFKga7JfPWd9513ubnACDURuH35iUbUNnhCxPTGTLg",
  "key17": "4ix4mhXJVkTVoi9rfSZugjiaa9kQ7aWDvV5aYCj1s9fFCJqPPy15K2e3dJyW6TtLjscjKsZ9z284TPYDtNLdCRdz",
  "key18": "553SftkfkHRyjHbu9sUYcBSgyrmEFGYePdkBVSAmerxXmnrDK6PLV7zAUiTMpS4QH7NADAnk5DRpqyp4VeZ31sKq",
  "key19": "57WixcM4tjNttgP3rq5dae92otJpnPhRBi5iETABqjKQ4eqF5Su5QowA5kXLm2KMSUK6CopzFXgESKc3fHfQcYC5",
  "key20": "24zThZtbv42XxopWEgNr39FCfokKnRQfdyffLKndC1p4Ykfd76rQMHkmWPRwsFcoifNRqcjhe9CPhjyp2RTuUXEX",
  "key21": "2XqUM5fx554MNLM7zJPD8mpVNaMbQYKNpMccBsDKjEsQPRibEA8wLZhv7gePC6zf1repYXKQEyMPFrYGv6XvDqhu",
  "key22": "5yxhFL5ipL5ji9kuhuGywALDvD6wBTYBh8jLa9YJW4wfJo75kUjWKa6BukHF335Sk1W3HA1mdTNTa5vm5Fvy8e19",
  "key23": "3DtsBr46Ru1Y9BnQdyXYRuwhFHfHaZYgtMcq67dhwAYcHvayKoLopHZvixqyNBAWBHiiJ6NfpzbDRXTkmauq8Eoo",
  "key24": "2eEvtkgis9zboGAmHiRuENqFcPoiSqws7KCEvJd4nGVbNJ4yQ7q2vPeAcCmjSSDoWeRjhySjiBnhJL3dEvWvpMhd",
  "key25": "2PMR5fhTnGP4ypKz9nAWimhh1rAFN6fYpyQy3hswbZj6QDfFEW73sCqEHbGuNziZeG8MYKHPqhJtT1TSa9sKXtGw",
  "key26": "3BygMwK1SvRjQrL7pGKmCyzJKKsLxRf23tJVeiFPB8JENwYxuAzcrW9GkNZ2iejinvL4aB95BT23P2LxZ2xtivbK",
  "key27": "4jqQ4SbtSvnumufshRnZDD9WxoZmtyN9FHg2yL1uSE9GAsgNU3HTaUxK3gTqbkFx5gBdViqB2wWaKgPk1bGExmoB",
  "key28": "2gKQLEbja9zY9vxVwV73Xv81jrAuhHv3LiQrr61bwVK2Y7me357s1ceCJBjxeuNqYqxJPVC9Esm8LhzJuikkhGrC",
  "key29": "AkkLwhWypcaNaQZd4jjYmaPK4xqAsUFgxcSizihq98Bx13pDULeoZ5o84psxXYXU7dDjvJKCYYz21iazDjDfUW9",
  "key30": "39ZdMmRHBhJToqqJDKEj1p8z8RGvEN2ApsafopDpJCQPihgYkDJG8UzKyZoRErUAuUfKdAiTw7Qopri7FXBqQMG1",
  "key31": "4VrkG82hM1ENCQXgZXdMkg11fkvqK7VuQMqPUMNNvZVNFeMt3jcaCjHciU5Mxu88C5ydddt262WaJx9gwa2Sb84K",
  "key32": "5Ke3pzmGgkPjSSaQ6m4x1WiKx44AThrAmq5w9pJtwG7DEQncLUAFpZ7fDac155ZVxj9u7f1mLr1mg4q1SoLRtzt2",
  "key33": "2M5LTBL6KrUtg3HAHb6iRJRfkjKiDfAiUc6jVWPv8tCA1smkKB9ideZzXfwLW9B3EvLg2GTNjv6jYYLRpNNRGRuJ",
  "key34": "3RtwdwoVGQrYBrBhunLkWLXkEQQdnrGe9THUoXMR6xohRt2DPyt1MvBxa3FDMUtdeyVS3VjG6JrFXUk38SAowkz",
  "key35": "636gF4vXSuWQF3BXBHQAqKPY5TFw7MRoFS9o36Zhn18uiSt6NSP3sZeVumpvW9bWMA24rZSG3hBnf7CstyGHxAT6",
  "key36": "gVxpjcZ19QPUeceGv6ihaBBU682ibSq2CnavGZ7djK6EHfRVa8xYGmALvHHd1qJBczTyn8SNCfR1XHyuJRnz3gu",
  "key37": "1A933hcppYRopLMFai3FkUkYt6a4tvTETj3LnNmLnWN6hbLSwSQpLzo2rFX8fLaDZPG2HkiiTbchrQD3dWEDNrB",
  "key38": "22BGUmyugDKtyrBfRCzGiWJgUcbumg6Bkeeagf71hCMdPmu8BC6XXmQGnCbM465u2cN28D6eTNh5w3J7GyWn8jyH",
  "key39": "sVtnHkcfEtvsiA12EkXHcaNES1Fz7216RX8MTcvqgvRwcMUCe85erTmxhkqybi782EXfRN9MrBuYoha6Qgtx4pR",
  "key40": "3tXDzCeZ8pes5AvF6RkQq78eu3ezRVDRWsFTH5kQJnrqxZAKLJtXjniqc7AVY9Dk1QrJhMajMkMxfabEQoQCKMcH",
  "key41": "aTi2iWhZPBb2wmTzyJuuPqCyEUaT5TnGQTeNTJK4apjBCiiPB5YqCcFFNUQg5mV2gtxULP6sdx3x9SNVKjjVgV4",
  "key42": "4UzYaCVkCfeSwvRZngyATsmkh2r7y6xLiwQwCXKigEsLvgemhy8gWmECb4xfTFy22uAGNfnEALuSHRpCLGFud71x",
  "key43": "3oMfG7NcPAKHCfNq2iP3Pciyep4bv7DzrH6X42XrFE4sRVaQzNWRWAwGq4fRqKhgzjT5tDeUbNi6VsQY7cQULfUe",
  "key44": "2UcJCkvAT1Hf2vvxo36CSTYV5ffPqvEqrEj8ngJE8EXFnidsJbepPrh1b8XCNGaEN5xGtJPEEaEqEHdQ3xg9DJRD",
  "key45": "4CTLFWXxjpG24yS1UAxZrtzGPvpVdckXnn6y6y3v4yBwrMvdoxvwsPHTEjZ5Q96ys545vwTYoanrch8CYiyFt2Ka",
  "key46": "3ZqE2htdsZm7vCYY1CnDbrghwwRt6eYNmwiaTUBUSGVDp7wcXxTGnNVrGapLZGgyRPYGCnYjnZJeogpQ6cha1GLi",
  "key47": "4QKAev2C9ATmpAeduc7YPqCvEnJH6dwt7zDiaBRChCeMC7SUP8B1vcNB9JBn6tLV6ySeoZV8kLkELs5LRBXf5eKc",
  "key48": "3fktLWMyEsx6ZbhJKuYPNNtye766eAPkDjyfR9Jj9yJJX71tmYgaMYMC6EDXu3KoidnRf5CGAEqq8xc9USrJSJVh"
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
