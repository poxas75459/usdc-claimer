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
    "PCTPEv96zav8Ax1u42JFhjP2Rm1EiDLr8G3c2UqjqEyzNr7f4HniV8drcoW3tsRvWeo7VXc8LeyAPZxT3yyDtLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKNhe1TtEK4N8WhMKrRfV9uy4BCdRd5PruDaBd5BJWPsbMiKYFRTDfdaQyfoeZUBkLCoC5uSoUjDE2iGhSNCp6C",
  "key1": "55jBZdPnVpkTVjs8ZyBQDdVYabtatoJM6WB7S2Y4P57CXGJXeP2Ue4ZMppf3hStYM5ezUgupAeQe786b3Y3boX1j",
  "key2": "4sc6D1swLfQ3vE7NgwDNSHiUf9tUTVbU29dVNmKxZyUw3ezU4bCJj5DXptrmx3P8r84oPkJokDuEbaF3ksBzjgR5",
  "key3": "hSUc61bUfVsm3byUv8hrKEMTKmFJuvS7R5hw32L31sR3Rtb2miGrciVvn7w6rdRfUo1skSwqe3X5o3iTQiBkB4b",
  "key4": "4LtMKgete8TybUaWWMof3fRvyNJwcj6hkMMHykN6CTzM58KAsZRND24oNZwcNXDTXiZFwpFPcN7JAR7VaCy8hBZA",
  "key5": "UUgsQs7aKpWQSq5m2mH5JUjovivDZap5y5Un6PkwBFcxr2ndst5AzvGuFCJvad61kCNdZsaYJpRFRL6xeYRfd5u",
  "key6": "5a2s1LUAbRoP4nmmeC7eQAbn9gmCjAfNaAun6qqG4bfy6Dt6ZdmHYgJ8jRHebbzQuH2AwC3P19zzQQ5CRivrcCno",
  "key7": "3BXS2nBfu8pBuHpMxtUQ7dfnvgBMyay6JHUQpgJJEHoV7WRwnE7wDsF6y5WJYTobCzBZ6McosnXXSC7AAzaTwRHF",
  "key8": "42i1ZFz9wpzWnTUXcxtvV1XFYiU8xink44NYujPv9JxMu6Qzj8atRD48bvDBYbF97tEpBjBw1eAj9NpcMYgamPm8",
  "key9": "5XVXrSV34aSMWRrVsPRbRnJAkAiH5XUwKkEV2LWdXqVhftj2Mt5VAwn2fFgKCFRhSsN8SVptA2uxmfoqUVmqJtG2",
  "key10": "42viREVBy6MMwXzniKv22WgX7aEg8bX8xytQv97EfzzCJYy2HsLeVvNCsEpJEsPCJpkmkTnfhT15ZBGRJcn3rhfp",
  "key11": "xSVkUxq2cSAg1BTH2Rdm8vK4aRRNZWALL8Pi4DgESxvEGsVoU6wWSdpgDcNqzg6Z1YuWDizdLrX2jWvaoraSw2F",
  "key12": "2jiYnBMNxTdYHpJJD6GTRyFUSn3DkbotBaW48z8mbG2AXpuDWKXqVABQWiDJmCQZ6r91FqJJVC2zfQ2drZkg7yjG",
  "key13": "9bofkRVV365Qj8wkyZ9weZXpV8sMA92hAenVnsfXT7dBeR4U8aueQaaF5QoCHgFWXVJxEy7TtzTGKt3jZ6y18bz",
  "key14": "BJCRH6DvbLjGYsEk44qXtZR1wUvyCfFpc773Hk7Yqh9dpmWGnjE1RmtmJqbA5HHmFZM3CrdqQX53nxq1ZjPJTm4",
  "key15": "5qEymQbdNSRZ1ELqY5PmXjYkZTm8efpQK8DCUH8gUcRRMaX81kHwZgPP5EqFoAL9WmHqQMZEmpE3d1uDd2Rc8u1e",
  "key16": "EUgdvVw34PDttstnJwiFK3FnSNozzPefXZSP7LD98WNRTTePjSUa9choLcPryZTgjuV5MX6q6vTMvdj63XNfBSD",
  "key17": "54mKuQpxi1RcAJ668fooN3Kcksb7kX9i5k1KDstMDckE9dau8212nhvxgGF5Bxx5UqsKxD2mu6UMxmTrropFEb3C",
  "key18": "5yATrfuzUu4AsQ7ivXxvxVAh7BF1QJCt3bYvpYhipis335e6RpWVsKdnyzjzgzK8vovtFR3FpQ6yPS4Voz88y5Jg",
  "key19": "2fQGFuZqVMJwZU4MoyAz24iXcXyZuNMN69bduHNrbMzydRqFFc9DEz2BHYP7C95q5nD1EtBJHYhahf5556nqeAjY",
  "key20": "3Kdc2J9VHCTmTFxDjCMsK9KEo8bfLvRsovdUyJVF2tRhqbUo4H7Dj5cyvrRJJnL4oBZ8NzKbPh2cFBvdjJYXDrMA",
  "key21": "2zs45prQQ8AFc7JrZ1EGXMjT2oYrmq97U5Ybx1qFHUydiB9R68Ac7EiHnEzLS9qAbLSBuCPhkDTHG11LjvL8wZp1",
  "key22": "3bntZp7oSnLd3BU6xmoKmyu61MEFch1x7FXxJFPgpbA7uN5m52T2QQ6iqbHBohDAa4ED91uxa9iEj9zG4jkuRg9K",
  "key23": "5wCfKrGZ2GdLzjo28JRf1jh7aTKozawELaFqdzRHhh17x2hK2zFGyxj1AjhBT1akscCPoamoBnkjdhunBZd4YKJm",
  "key24": "4TbUCUHw4184Rz3rjGp9YzL66mgAooZ2ArYkR4Fk99JQismGYThT1dpZ38pb1AXKCqt7117HXqDCphD379fnC2qA",
  "key25": "2b31ohAJFz9SNSrmKp2sgwyBYeADseqoM7dDFqkn6RazPCNwKcRkr8hS7pmtP7p2ca3Qhr4ua6UGaLW9sJETd27F",
  "key26": "29shAgq4QY4vXNjyQpmzk2Z7wcrcG2gSGqJrLbPt54RA5rArdRgAcqSV9qGopgREU4eQhUaTboHaMuCwfYQXTuea",
  "key27": "5B4kAb89vg8XLcNfBfshXQkDNeMX3u11YRgmvmY9gcr8Rw2b4ZhyczPU6bcRWhpdQVfuKwf62UD5Hfj2oQdXcDQj",
  "key28": "2tBS6iUGVzeLwnxmDbY6zEJLScyu3uySNZvU1cUC4WgnZG4ajZ1RY5Ch8ghxMRyMhTLHPLqZiYt4iswC7iqYEqiq",
  "key29": "5fFnQ7484tDyUdefUxJbmumBMtzLHgob2tTeAhirrPfgzuNkZvVC6uriAWAQuV6QAuodjz3goR5kCneqWgiJCZuU",
  "key30": "FPhH5mxUBGYwveTiS1Z1hwM3zz1fPuK7Gx93yujVwKbkBAbmjsFmwmto8jcrNHFehEMw8LGKYyH6nHWBPtfV3Bd",
  "key31": "2UZoKMexzF3WDQRFtExEnawNSHRNLWL87V9vb9VrhAMeAyeqopVr81k3MFfa4jQtEJ1ZocHP3NWVMMsEfHtzjWM3",
  "key32": "4AT9GgQVQwWvDB76qW4H75XGqMiFqAYEZm526euCMgeUnzwuhU6oycrSqi2WvEenhM36eq6QAf6vnihWVdphjvbP",
  "key33": "3LgGhcMc4U6wCNnnoeReu3ejMrgJdgfzkBwzQuRTVTp5Gp8VFeXsV5t11r95bHuXXM8hZSS6VK72aGjvkTqH6sH7",
  "key34": "3ozuoBZdjeosbHfEMtv7cK9mftUpSPGLAMY5veTKJZGEQoS84guCXTxPHwi9PcNN32CFxckqZJP91XSQkrcSyxpq",
  "key35": "3XCLpDnN2DxQkWxsVQ7YLaLMxMq2HDHUuuex3Ei7KLVC5TbdcmKEbcEEdRH95mZXcXFWXwqfAGzPr1iUk78bVX2j",
  "key36": "3Hzn7RJqLEPt2vsyjrmfzx3qZ1gdk6NTpxhnm1vgVRYW8SRRJF2NQ3S4pmPDMhGzkEHyV528xddWbV1Z3wmndTnQ",
  "key37": "4LTtwoTfB9DK47gaoj3EgCm4njoo6EH4AgxqdvjHhK2X94K4KYcxQ7ZaTShVdCL3FTpb8fCyEsFBpk6HZGyWRy8p",
  "key38": "5Xt2QfjZgko48XyncAZ6pxA18ENt6hdVQ67srgvbd2kdPkyZA2HmHFvpmdDxUBQE3VUNmD2nXA3E59NFQrArZ1m8",
  "key39": "5oNY7xNFUtXjmgq2Cx66CQTTkq12BRTVGdWoVGkQEnTVLsJpfXWsUGQjngYFVfUvvK7C6CoTZ1tHL9G5MJJJPENY",
  "key40": "qrTS3EaaFkRbvtd5CFUkw2xrSRa9g4L91pGRVgsHj1EAfef6tp63MTG7U5efR3Qh88gcdxzSepoqYL5y7ZmbRZL",
  "key41": "3ZGS8yxxHoHUFrCC4U4RL6DJ43CDeLujzcUS8YVC2ErUaXp5tfJaPg4ETJcxXVU375o1zjuJRazojWj2ZUkhgVVF",
  "key42": "rSUHwZNmnC6WdrgiGFpBNzMmhzQFPqV7gpttNf1BK59ESjLQ6C4rPXHMuo9hC3jY2KupwxSathf2PSwWxbud3Ly",
  "key43": "3shQeAR9fHCkUoeCpzW7srwJw4FfPhEPux12oY1897Vd9EdKjc1cxeuip7mcrRcMqW3uyDQr7NfvgkwRsvMrMTTo",
  "key44": "5jiRK9NyEg96g3Mf6CeDjhMgDQYTW8nEsMpi6YX4PEEahCygnPBhQ33CDV7BYCcj55CMkGasKQieg7Md1ydVPYzw",
  "key45": "MPNUET3xJEvCfsTAyG8A78639dYQMfMw5dHC5QFJmwbakexkdkrQeKhZcXyLNWdPygTH8JfFkY6TtW5235y43XD"
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
