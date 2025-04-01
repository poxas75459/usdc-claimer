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
    "3C4kKiVFDccsgzpjkgPfatPfSMeSBtVCaJ2vsn94ovAe3AP8GhTk5dPq9bzyoyfBozjE4qqBNmjQ2mwVXGmrtWTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBqPG5mRuBUemUzQQS9W7hy4fxZyLLQoT7FbkGZkYK2XvjGg1An4h71Jg2aoYAT37TakkF44Ds5vNwQfCmqB3UR",
  "key1": "omiaKCAV6xJFVvGjaWaT42ZR8GwXFkzhJrpjeNYdu8g9axQqTPLBk5CCiMoR5Zetx7qt7AT9WZJJt9FnjdQcKBG",
  "key2": "5exn6payZPdXEuCaJwizn7f9YpVV4QJjn896tbKigvjT1MigXzo8d6BimzrEeXqLX99kZsKJpUebscxH9TNFz91D",
  "key3": "5Fp4buQszBgpzEmw74Kvim4rcn3XbJ6nkoXF2Ke4xENCMkKtgamsteA9ffirRjpdEoLaZ5rEfiZoVAFJjZzPPdK3",
  "key4": "3xqPF8Doutetcq7UGreXxxY25PCbjrq6biTojWPz3RRVVQHNfKdnrAEWPyRarAqJfvr9jzjb5cSaDzDKZzVGV8UK",
  "key5": "3ceYF2nsGnAiLxchAo9WfY2dNCHnSjUWC3bF2WKnjPWgjaeM1uxozfSKBr7nxqaMGDeyp1cAunHk5xqp6KwccGj4",
  "key6": "2U9hS3W3U4d8bedb8ajCLf5DXe3WF2hfBVqMLDycJvRsEf2MQNwLmiTNJJWtVPYgNHNwUkJp2fVWmSBUks8xC6Pu",
  "key7": "5ybUZY5EvLbFZy1RqH3SxMsy8omNLzvvHtb46rZK7ePGqHUV25S5A4NfVuKGUii5KorZKpT2gQfQLoGcTasG2qph",
  "key8": "J7GSrxQcBMdMp5cv6PZyDdiJERxgwCJPehEkN4ADr6QwJJDEtHDP2AhdhijbJSExXFyRXhpXHsGuoKN34VbfUrx",
  "key9": "2KGTdLSpcgBv1WCumFpmhFjwde8yXvVjyXqCZjfdgoqKcKH62Aho9qzZj63Js3kKKMFRFeQbkSbsW4uE1J7YVS8t",
  "key10": "2DiQH6p3iyn3iQRBCkFV6TbVZCMNTycw5PdWuHnN7KpBy5ZuJ9WN9WF6J8QJ2XZ9U3WZ3WyPZzRKxVRW1n8ABmq6",
  "key11": "4eLJrwpgu8TGK7wdKcv6XLtvduo9SrSeG5p8cvVQW4baCZ8ac7KgvL3woVXYjXsvZdWbvFrpNzrdW4YoNXmGQkoK",
  "key12": "6358WhLFJBgWqQPfHLHZuSCTuHhwEyMugzQRjN9ecJnxx1TrE1w8DhRcHt3UorX3o5iHwCkZKGGUHj71UwcsRXYQ",
  "key13": "3XNuD2d5JeWnFfVNtSK4Hn98TBgreyDanAoCXpsyNozrBnQ49D38kWZyG1uMNGQtaHpfy8Dp3Ku6wShjYTbq4PoL",
  "key14": "31dmdf7CDnmx1XxzZ6VyFSwAaTTEfiigtXvRiivGUeKBCgrpV9to7nPiGV8eXpBYmqd37W1RLqmk9CvuneSv6PTQ",
  "key15": "2KpYYWsg398xBhp2TuupkggJ8F55EYVaBE3tyLm9unNNAV4KMctY2ZHy8bG4F6M99GrMZNAwUFAz7cxgoqTw5bg7",
  "key16": "8sJkaS1YdRVQxMQeWroQWdwC9hSRK7hh4HBTHVGMRook1Canx25GQnYu3RvwMJinpUTTrb22BwEHB26qcwArx96",
  "key17": "odbDcQxXoWBS3xTU7i3JxqhXdZMh1NHUk7DAhUX3RbajanwhWFgdXWMFT7K4vAqCXejkNtcpfaTTCNZnHY4iU9W",
  "key18": "2bHaNtaHPnj7fUrcLrftoh133yg4DvhsCeon96WDTVoRAbZY8eiJeRn5vGBcL33nAi1tJLHDNGJvdtaV7LcPnbkr",
  "key19": "2NiJh6iRKhouz7CAt93FKyMUJzUG9CVyGUUqqk2Eh77JTYSEf8wKqCG7FNS4kG6mVQUf2S8RPud7CC2Y4zYnrCsW",
  "key20": "UzmQ59BUneTTbpVDaD7E9fVDbifUVrdkaGHJUf1VxzPFN1QZquKf4E81T4Tohkeg7noz4eDNvNzytHxaKjpqCJo",
  "key21": "2CJ5xKnbfGGNv86GqAUYVahTN8MV8yW3s9vZQWCHvVHWzVhMpWmdLKUZPjVDATm491Zw4JiQFqagHbTdiJjwmgZW",
  "key22": "oDuxBet3cMEhF915rQWqvL9zki1TCmdbsrmX51KvwB6B3k3ky1gAeTHrLfMMWvReopAvRtWPFs9asNwYQtzcgjk",
  "key23": "3XHBhLDy1Qnft9R7BGh3ZLdpiBRHAn5gNKF3YcH96bxdToPKarx7GnfhjGxdz6FvrS8rzQaz1cyMzHP55a6Pfoxh",
  "key24": "2rtV7Kq9PfVBueAh9PLZzyPXxH3Nje52AQneYXu56xCWfSeqAuUTPqesPNtk13VFd7GZTbTafdK32rw8GgWwCMVn",
  "key25": "jNRJqUrG3Zy7EMJhkytoWV59ETDBcdh6aPaAuU2LKjSrUntNfBNRPUEPyoc1PzS3CspPzfnDz4EBAH1tQkrFiqm",
  "key26": "4hNnjQWo83vC9622eZ7LMuJi8xfPw5EprowHLsZmPaerAPJCzGq7wyLZnjk8fkmMESDTw6QbHdPSKRHHCxLk5gwN",
  "key27": "5rVch265tBBEURYsCzynhDqpndvBBrrXEAWcz5LFawcv6yCqKUcyPr1ikEjb1sEptc99QFuoSdeVWPkr8NbxXex9",
  "key28": "5r5JX6eeiTfDTh9uoeL4mKqCBXjc44ovj4T48EXo37sX1sJTuxEm2hqUKAzo1RT3ohvmnRH38SeHTieKYHVMaZS1",
  "key29": "4CJFwFsS1VDAuPXCcZay8YNi4ujSiTmTnuLqytQyEsoAdDVec9jsmaTEjvgXJMxJNZ7SLK2e9YdREoRjAsmSRHkt",
  "key30": "5WC1EQsZEnQVjeeFLWvkaPsPnQNmZRR44Y38zA5ofamosLsT2s9gKnuaVPApcqGQoR53TLqpHiDo2Vfep7jXLqm2",
  "key31": "2fHHBaW8rP4zrzvexr4VsaN4JmPPQc6NGwkSQedznwjBjZeSvEcEAo4XCiivEZDt69n3M1mskQXhQkQjMC1BjGDm",
  "key32": "41u6DpLSbGaSJjpSe1zWUfeyCGNuDSCGt6yAQeMs8atR63sZwTzTvifcTBYDaBwsgjN93Efcbu2GF3nfgub8gg9b",
  "key33": "4y9qrST91mALoPqoMa9bUJGspas1pogkVLXJe5WUpS1VGaeLoFYKUgjPJ89fUm1ZAtDYNcmwiUsjxLtyeypGriV5",
  "key34": "3HWT3nSszJ8ZCy8vdSgfw4ExmXbPY4sJruVhJaK6sEZZxTgEZ6DjtJHS4EwEACjSQvzixzQy9zWenZyuAr667j9H",
  "key35": "2qRBqpkwdvWANJHc2PYkx81n8ig8TdLmBUQuGK8NAWtydXeJw3wV11MEXRSxBmwd2AoJ9yNeVkHsLV4PJ5HqyTPM",
  "key36": "7ezMn4X8SyQHEh8UudD7r7BZkY3dMqKjRtaeFzEHzb6bHQM8nrT9wAfp2K4Cwd813eHW4NuEWJzoZJjh53xoHK1",
  "key37": "2wVv3jCyHS7dTDFBkeCbDXXN9uJA8UYkqtLHac3d16VGYGRfrAJpP2tHoUK6g4beeHJ8HPp3XYAcDcYAsDHm7B73",
  "key38": "3ZrKhm9JaHC2pxbcMrEkQgDx9pYWfeioHcY6RzTViQXhYK2eAy9ydY3YxSPBGP9WeZowCFMmmKUgjQbnYuhwVWik",
  "key39": "41Zu3aJfvfmwhySL8UrJKpDmkwCFdUg2EtZ2ijDZePhk5h1RTxT6mrbDCmHCzpQhFu5zvjvsqi9oPXxHATm8ZVBe",
  "key40": "4CHi73kJQuJvKvuh7YkoP6VaRvyGWAHK8MDe3x7eQPLthUi46QirtrToayLunZDsKqy4rUDRMWWA7bZrXGNAYcLd",
  "key41": "66kFk9mkZXJgKCqp1wXtoh6B4d7uRefrN1ZYS85koSp6votHY8RPsjYcR9Sgtje7XAvmNyPdyf57DYDXagncURUj",
  "key42": "2N1GUezFJ7LfoMe8UAqKurfkvTKNp1zbEQnNqGd1mDipSERuok66U4wZMgYqdPibZx42B4ujvqbJuoZMMN3b5dsg",
  "key43": "2bBnF2QXprccro9hx7oyWy3uKv8abdzevjY7Wb52BRhDdXvPABnTsjtdBax6HwighMdaP88ctS1tqgVbPZMN4V2G",
  "key44": "nMLQ1poEngeuYuf44Lczme8SJojgjno3vCbktG7aStPe8qUbGqNvKetSC5Ayr1JkFVrxQuHToXMRHv3jJP462f4",
  "key45": "5R2NMfZiPsoTzfmFbMbZE2MimNSZn4ped1qxZfBo5PtnAVATR9PNWx5uLi1mffGE9MZ3GZqgabZDXY6C9qtBnLwb",
  "key46": "5vJ8yFzN4fn38mj55kw9BgMKx4EKVmr982nq1SdF41CUikNomRUek93NMCrfja7ygH6XAb24mkB4mtBnGtXTBaPH",
  "key47": "31horJb8rjLaig3Qtg9oBez9ZEwKBJreALi8mBtnU2D7mT9vyfoGSdTGQPUKaFac4j9gzdF3EhCwdrogeZKU27Ew",
  "key48": "21y8qtwpyEtBpKw6bQHqMj8987JaW6gV5gtqh1PyYi1USkuBjM1RTjrg9KonVyL4L9PgHuxoqJEZVD2hoNkDUaHR"
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
