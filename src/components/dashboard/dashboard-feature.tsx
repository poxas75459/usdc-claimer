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
    "221HB6fzAM2TysqQNpgTRoS4e5aZ32L5atZzdwhU3SUmwAbFSvAjBrUHwwkJzATQTud5NHjeui2WnJMfFGCL1PX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dPYn5fLA9QqYWApxaxjM3LbF8FoDyPdKG5B7nfD8MMGg5N5TGcAL4xpozGp26bm68fmbu6fvn1b7QaVUT9fPcy",
  "key1": "3ck2zb3QPSciYJ5hfrsn1W42yaiFFpEiWNdni88S87unWs5SumGtej2dPrSQqG3p4c4fwH3rPak4j4epJ8kdFtah",
  "key2": "5VFe98xoQ4MdwKuFPxfxqJ851xuj6tVpF52wqFQCz2e4y7KkvzvyqkAfF82ut4RUFFQJHHaz64ReGXcNpT9mkU9K",
  "key3": "3qRuFBha8M97X7ur31WUFTBwMPePiuoZMhrrkqFb5pibCvc45LgP4243K64RihSkLrSaFpyXrW3T18ggjo6RDj9T",
  "key4": "2LRqZdix4awrUwJCDfDsRydJAfRGfWeuDAJ6Ybro3XbZQh92LjEQUPF6UJZwDgJerQQYGu5SJDBHbfgBPw5EqYcA",
  "key5": "4LteRynYgm3nkKXtZsT9rZH79ksxGkGUA4wNjKbycZgC2j6QEgQRLUJnq8DqZVv7iyJVosDmL9Mf6iyqwHQaM9vJ",
  "key6": "5v7zmckwYFQRRdYYDTRnmPtGiRt51mUKq6EV1rzX1G39SHs2Aw87RNHagq8NA1Emitx2WJh6MPJjtSgQgFGBgjQk",
  "key7": "55RovtRkhEtc7TUvUJcyY1RdAhmsPYgtoi4YFWRVvLkHZj1aAmQxqyGZPsfYTDuHk8cn3bF5eY5t1YtnS6sM3zv2",
  "key8": "5x4X7P6brc88gQ8u5JxTgLq4VB1YV15yCeS2TZNJxPWppNam9dtU8929EDjVt3dgcb7RtgGNHy63ALLqVPEYQYYF",
  "key9": "41f5HzEoqtrv3aRcWqoxLQfKFywBehbjyJ1mHqj7d4AS88rcZ5zufSe8W3a4Rdzidskd9kQSromgDRHXoyDedcpZ",
  "key10": "mfCqSHzsFAyzraBW413GMANDA31ZmwxDhDiEsJ564hCV6VdWybQGAkNVmL6dFCSQyZRV6mDNWmiht1rpi3Qpn8C",
  "key11": "3eXbJSH4m3FtykrUWggHAatUiZ897ddRRAcfQvPxzA1sYGVPJqKZ4Av8rHbzHw8b2XgkZcdBFArJkVcovgWJ1Kz",
  "key12": "26uCTfePVW7tDLDZ5DewMWUHjUfwq93rVzDWvNhDTRK2sWp5yZTDmF8GyRoz6dqUCZ8HBTK7smSs5dBFNYfsqqth",
  "key13": "3y61xsz6ENSJLW59XSVs8rBgHKY8ho5zJsRLWioUPgf6WskkVQ9VNzJht83CRED9NedeyVJeywShxY8iWAjJYoMW",
  "key14": "4HyynxGSvxt3MyVaLm6rNDLf6QMtB56vWBHxpcKqRstm7XXFH1x2FiuJNqmxGnY6xyXhiNfqAGh7Kk4GWXcZ7JX1",
  "key15": "61S5563wdguDUnxrUtXVdsff6c9VYRPaq3fYyiiLYTmF4PGFP4M2QuHKhdGJWvhn68QK2bfTukQggAxDASVRGdXK",
  "key16": "3eHt8G3cY9vRNQxgRcAMpEu1ztfPcJyL1UVtVYDHzzfzAbne7WmyNVvc1atNtnTtNETNPiATSsNiWDXM8bzuKtmP",
  "key17": "3vLVcBXfAUD9McHNBjsmWwdDEWXJYFw3PAFvbjgGPc7Yg6N3fKp2heCbfTjbRkUeiddH4HghoFS1p6TtYxzqRWsw",
  "key18": "67KSVXLcQx4acg5z4PC7RNw98BpronGfApSmYXGe1bQaWnPMeaPCKgY4VrXyqiPFc4G8Lp7En3ski4NdCuge9khs",
  "key19": "4CZTiYggNUc54EaLKU4QsAgqVM484wymKZDyhWMWC5aE9WYdE4Xm2owJ921cAToXgb2YTyTGKT5s2wyh7z6wEkrX",
  "key20": "htrN8hKdEVMXq2R8cpxvQq1oJbJmuEb443KKwDPzUrh1FDsFm3MSPoxbK3JN9QTxPj5nHrHxTdjPYod6RHuknjJ",
  "key21": "4Miqj4BcwiENK7bzowzFcjo21DQHbZQYhFWzeiZfJ89FnbEKbZwrhFVtSFcwkXSV6fN6iRCFEemnZSjKhhv6ma3u",
  "key22": "5BCSqmEG41wVBSsBSvJ42xD8gBMDGjRFUQVT7d6q15iH8CKMzFVoCJUta6trg1hezeSftZWFKyqv3RLhGLhPnYib",
  "key23": "2H9uyQnyWaoBpE9hdJgmQyTyXEQDm2RB23CtyFCFjNpzepPQzhBxUL2zuHYrkDvJjDwk88AGdTA28kJd5Yefkqkq",
  "key24": "2Bs1ikCH8VTN9DRKo857p8184QhN8WGc5T1U1TfAdTy7nsnjcxj4uHZy19j232bHgANQeoKpnfF7YuPF7eP9P4yT",
  "key25": "29HnJRqvT7x4YSK7zUvoPiXTmsGFW3V1x7XEeeM4pYZfoNqHuUCWZXucEvvPkkbGiGcXixDQdCWa6xdRv7PaczN3",
  "key26": "acDNjREWfofwtbojLYXseyWKwpgs9d8pgchHxtorn54KvjEALLHGBqiLZXJMdXtH6uN2CxkiTbyDiuuWv4b3Dw8",
  "key27": "4uqgpiamVGj1HMHY4PRQRSSQmniN1isRcg2hiKiTqALriU1yr1v3A9PwDFkUByb63cTsXDJnepc7R11kyHH3S1FS",
  "key28": "3P5LHqGf4fbcKZRPuBz83canYiaxgCJmdrTxgxcHUGmPQBJL3iHkp6EwTw35qzs1bwjMtZc4KRuRC93zELL8BgWL",
  "key29": "4KgKUGJTmNQ4fxfUkEmKhLVEqALoVyYRtTVjB3E3s8USgNSc7VR6SaEeumxCkaNSwRG1SH27ntfVjPotT7kViPkX",
  "key30": "3gEBxRHeyy3Gn14VzcjohfksVQQfnt4SZkAut6fegobyVBxE2jBR5bsRtwsyj7HYvxDESb8tcKVPnZkYxRAp1GJf",
  "key31": "4MVSTuz4CV2TJQZZcRosvDuHcm7S2DHVFpRk86Fi4aPHbsq7A53n2svo2GQumTTMh1xT8XdE2TNRFkwvSUfxDeha",
  "key32": "X12VZx5W2CboGPMHd7xpNQcJqKPrJELD3yofG9rnD5PyRWmybKpteT7DYNc3FEU6KnbBUisJhUCozet7Hz2MbUx",
  "key33": "4cddLi4D7cwruqRHm1zPhmoEsWThEP2vU5zQRVikGyjwd8vErSHhP2nnxMGm37ZrL6G3CJL2kzt3XufWyH2BC7mV",
  "key34": "2UJq2FZRc83QaxwcKnE74rXSzg9NCF26nVoVurqnm4Be5gN3kTVHkU1fmFRWphp1rniRfMpUmiLXE9np1myFmaNQ",
  "key35": "2B5ZSPhk5VoR2XYNTDqFHZXMLxQP4mBjU1au93JFPrwtUtGtaQUWYaAapVi2qH46FwgH8PzjLY4y4swBfphm3rDb",
  "key36": "3hXJTv1jxeFhTiH4DTL2BwDPYb5EMr5JmDtVKLDaJyWwdDoP2EJtbfpaLu7zQH31Xbcc5Mnd1xb3MAjp4osheaTa",
  "key37": "3ErPoSmhMzsiytZrEatG8x5UPmDSqqAVPu5nMhog4a7rK4hVAGu2mip4xH9w2rPiDmb4C6ZTMxGcyfva8yrRcfzd",
  "key38": "4x3n44Lyq7NfYApAN55cJaXCJwcKqGSs7MpLKA2HSHYh94ToAZYJ3QZSTam4QwgDiS8Sg9XfBscJ6pTJAWXCeHT1",
  "key39": "2TqvBZg6x7AFja4DABSyDQLBE4aiuComQkFZcwqfsL4xpsecU2z3S79erSiQZ28muGSNJjxeJRm7M18QocBjd49u"
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
