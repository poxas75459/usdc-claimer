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
    "5q44XMicGz33Ci1PSeecye4MQCJvYWodmXJt26xX7fTGdmtznPFcwxJj4eLWrbxFQenLS6zKqNDRHD1AeFBZDHXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D7Q5UT4R6tfZWg5T1jCJxf615G4T47arvbFJ42sktjPxhpE7TJaczC3Dxhz8YP11XaqB3kAXVqcRAcUVJqFcLG4",
  "key1": "65XdEXbpk34XTvrKezTkhjeaN5ffvVkNBiaQdLCJZadwcQTzeDcwJGFUnLp31mW2sxoNEW9oMRQp2nG5erqYUQK1",
  "key2": "4dmPS1iBgqiHnX9iACgCDQu6pGAHD7NW4UxhEaSbDrZjFhjsu9dvULRmNahnr5Si6hjpoDVDKpecKJvnf7ijFjFv",
  "key3": "2WD6q8aJdZhGnvVPpSX9U2dQshvZNxhiPG54TbSVVvrk1e5gG7anszdXe4ct2Rwoz63udpoS7gpvxcoNozrk2qjk",
  "key4": "Q2DtkRFS2QdukzmVS59MKLnmyBjWfbWRTD2Wr2xg6SkzNza1YQeFXSaqCbWBwXLbL7AeBKHHFq1RY7VaXTH5yx2",
  "key5": "5hkwpy5JL965RuoNsbG4D9eSLRW1qxuEh1YFHqQhLWfSvUujNbcVA54CXCXGV2fFPprDPbJzWKYSzyx8dqjrSVma",
  "key6": "u9ut5hJkXPxRThJwv2iw1gLrdDMadnxYVZiGs7EjNHHs2i2HVDxAdvL2GCCgR22RRHzsbtycGnmgcpXkmkCxXEJ",
  "key7": "43V5a3mh83afx6WRGbDpRpDeY6oDE7ZFQCxqQZvAwfmNv2B7KfsyQLoM74DXEcyxjWSRpyU2t4azJjocu6Rug9QU",
  "key8": "4V4edaWgreBdHPokYAuRzvDkNPN3RWjeLXMVTv5s3Xg1rr54v43EBQrmcTTYSDJ3xzqoXGBzeXzk4XVf5UxnCixy",
  "key9": "4oxsoNtBe3hrD7kfJQLJr9CPTNrAt5oon89EzuwJC5GMsRSFUCmh3YpbndBPLqMj2fNcsPybknopFzL65B1e7rVV",
  "key10": "4MJkhdCufwP6Fwd8cQg1TAbzz7jzmsKZKhLeMpnhEgrS4thAaZuYRygcBVVGE96z9sTSXQ69ibdK2NUXhV62vuS8",
  "key11": "4WeYzvQKuUgQ7svr6wcMbBHshSJMq6nPd3h2iTCTGBRMarAh4YmMTGKobWVkELXwLr6ZZ8pdvhgN5Q5zQDcCwHrQ",
  "key12": "4xwCDU4qk8HBUrvgkD2ijJZG6zsNGLFfXB8CDJmRJGzv88y5dApkV72BNAhDWuD2d2aSgqHbwkpz8VtehyRLaaiP",
  "key13": "5AfGbvbzbFU9hNiVnGPFicifjJ3jRdKJBvWGAhW9kVfQwfB1k9fHvaN54miiFmVBCYtGKuEHpHDodRHSsRRvao1N",
  "key14": "3dHbn4PWxmHAq3K6YKCZv6VZw6G1s8afKjd7bfkaUYb8z6L9TiD3WX4c5NtkRMqmTPBRsgHS2TQu8WBcaoguJUcG",
  "key15": "2uud5NqvFkWfXXBp7seQv7JH2QYAEK1fS84VRZgiU6H748wumh8H7DUu5VVMgVmwWrKoogeuRcLgr2zTbtcVuDKF",
  "key16": "TANDsgE7rGiA16BpWtCgfwiurNePUYWwdoJYnz1UApekAYUdkJ4CeWJGd3GpE5HFMH55gfKTnKvPEhm2Ye5GD6z",
  "key17": "22zSL2Dbevhy1VeNm8ARRdos5B3vuJTGDmjSSXhqPHieA22Kmmfq1Qh2MaQp7DAMye2HPbEGm6ZiB1axLq2341WN",
  "key18": "4DramrA4kwAoGbU4qBwfSo7uaGHowuNcuEzAFMpV1ecbW8Jf2ghaw45W6jbWZgGXM4HzSFRLJB91snKpYUn48Jq6",
  "key19": "2SR32ahBtot2NrsgXB8vWKEPUc8ajvkfmsc114qTjGeZT72UNgKfbriuwHR6yNiSiAR5hx98fCtaMiwYBaV95YpF",
  "key20": "64GDGjxSkLGkgub2jU1MpzhDLajWSuZENc8cPP2TtgwsBdtZoqiWmmHkzo74EZ8cJWDiEgUSTKrZfya4Ac3tWTv",
  "key21": "4N6nQTX4NVKHHgr7D1LpMJBRseuZBRY52aVD3kpUGM1ogW2Q6M2SNQ6Vc1aNiv2QazC28yNWZwUDk8WZgw4qvgpm",
  "key22": "DApmWyFYuhJwLsWCvUm3biEDSiBT5PsgEDPpibpqdX28tp1i4om2n5r9S7z1nX4tMTper8kttHiPdS1sQNuGDjY",
  "key23": "3cGcrzjwrEzydsozFZGpWhYAtAeF5GMFreNzaCTjYnu5DFPMxyFPuahFR486XLmcaaaLRHhRHRr2TGvDe7wTcRpm",
  "key24": "4hUmSBAxATcLo1cx4EbdXhpNSzt2PZNQW5buwU7v6Yitu52rB4mQtYqeCBb9Pmqy5uf2fXfB7nCbDERdaTVDv8Ve",
  "key25": "EJEUsrFvxqLtVomYLCVurGecgLHDLN3mjURRt5qVGg6Kw4ADSZXHmAVFn5t8d7pF9KAWdWN1NX5ZdReiJGmNvaZ",
  "key26": "2oLirhK28p2xsHxgLDCqRDTBRp71BgMbSuzCJ8sjbnFih5gSyy5qHY9tr7KkeBEeNwfWjZSPNLZ4AXaQgVxXfuKR",
  "key27": "aUEFd4EhmosNyMZV4kyt5gbPizZrnBQCBbpCx2Nzopepc1jQbpVtC2cJnEiECqkCUfQ3GBT5oinWMsiqp8yFdha",
  "key28": "TDPogi6sRb3sDHuBYPpe4V8GouXopfT2RLsX5ViDbietHioWf7xrCxeSzCndXWcBoZ7v8UzLDm9NLxCK8YG3fMK",
  "key29": "2GzYFDBL1xWhfzF36GwtVn4o1h3fX6PjPxVerhcdYVKssuuc8VDtA3aJeSoHDi3UKqTKmzNZgaRPXkZ8peA5GzEz",
  "key30": "dC8yMYsvxUpCygRbaH8iQAZzboSY31kBQcBQVjmJiNxU2j8ca7S121tAV24SduiFEBxbqk2vXQCgis1o32oUe8y",
  "key31": "bdr35iCu1SXFLFxWFiVwH3MaXnFLApMQ1qvHESSai9qBMwLXAni7BgPLckGmctz6RCf8q9yNpUkenBJiDgo8zCj",
  "key32": "3Mqmr1SsrXbddDB26QEbb9TrvJtSqoDcZPgkC57niKZdbM8Q6N8kKuMpNKgWjsRthGhSiopkAaQNcMH44goYR17y",
  "key33": "3528iFXZyUmnr2iU9oYnTJ8WvnhY2FvnpDMLaNRuGvVWpmUjc3b5wrtHqsJCb4veDEuAhyboCwMsySDrZo6D41K8",
  "key34": "hH7K6rcCVarPHpVdppjGkwAipDxAjcpCJ5THKmo8DmNNkSJYrfLKFxezjXFBRLNSB4C5hcZDK89346pZ4FhMttj",
  "key35": "4TAsK3A5g7wmyhTH7SuncowxGv7xTC1arNJZqRjNSLb4ee4TmhYPnWbW54UuybvG3dz1mTARBqqztxfuACg6dAPw",
  "key36": "3cJdhDyUEJWTnrpc6kjagBuPnDFBettxsp8sqrzQT7BBSagp87SBu5nsHZ5roLExCk5Ce96y4xJULCZgrMrSY3Aj",
  "key37": "4xQnopKEHrGVPUe9eJPs8Nf8y6pCwJnEAiFg7eNs2YXGLTzAxF8VEEYJvXZcmYwdP5NnhMhX844Sr1LcKNsXo9HU",
  "key38": "2nYG19hSkr4U3pDBw2i47h66TQyfdpeEZaTpoTt2Nf14ouc6rd8GFyXLSJUFNrgEmHy2foNmL9cZRmRJz9QAyGiK",
  "key39": "24sD6fr3WNLm24sfVBoKMbigo9VWktJJAma664Rp8UVfx9Kj82sFz98FtHg9KvJGi3cLwNypVtMA1LVy2tSho3zT",
  "key40": "5hgXr8H2iyDjxyGEUkajFKpZ7APwuUyusZ8g36ZhMUQ5g3ixwjymmeonsxyoZQ6GVJsjfXikhR1Y7WjByzktTxRf",
  "key41": "5nYL6Gpihk4Gfmgkocp2LJQqEGhGn4q56hBxPZr1itvtkYbnkP1ndErKyzP4ckcm5BqTFV1jMLBVWMmxf51wGLM9"
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
