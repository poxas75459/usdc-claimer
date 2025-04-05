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
    "5xB62ZjsUiYJEFwMUsXAaZjVEWFS1ms4Trep6TxJJoGwfHnyVKQbGffCpBxbF1D3y8a7Ggppz2tJ2gBvSkHnAcJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKGq1pvzyEjmsbg3SZZ3aezeNP6ioRZW6YPtvmYNx4fSq62Vo1iWTS5JPQC2kSue5jCZL1K9dJELwNtBgwxpYMx",
  "key1": "3RenBG73AfCZEogk7rvkGD84P6bJxgmcNBBah1oHfTG7RgcHfHFezpXwLpzDCdev2VfZBoh71YQP9K3jLVEqu73v",
  "key2": "2jo7vk7fm7wcDAtYhsvDnxVDxSqmHxxhvm1a4eKi63AqnU1Q5twSwLZ2UZa3xAG5GWi3WtT34SdwU2144hMRAPj5",
  "key3": "4MpXVWNAC2XTEw9hudbsZDdroi6swWCRhWAnMhC9hxQWwJ8zhMTrSoZaQjnALykbenXRvs9ze2w8rBRNtFh3Uj6Y",
  "key4": "xUfTWYM1EKcPrLyC12DvovArb7Jqb6J5JQEWkXSiLxUYfcYgrVuYvKaqbFAi75mVyVn7Uv74cBYAVHKwWohdxM7",
  "key5": "JmtCEVM25DwzMmgbzfuBc3pC4B6bCFyr8M9nqpKo7QaBVM5a1DPPpD726KWxaqD8UAQujHXKYphs6wdN5S9YhFZ",
  "key6": "MDPsCptyJ6RrkD3u6YAkmDPK4s3y1Cc31mWqybrHzhD4Knca9u7epnzJdFGDdbe757SMB1KVeWCq7xdJvrUpkGj",
  "key7": "629VAJdW7FYp9uuEeTmAyuv7VBvV5QAY4EEMF4hJ9dtn5VmEsJubakz2JXLrKa4k2GpuvQ9WFCPnSj5ZuML8ELyX",
  "key8": "5g2BhWVbahpUbCyBJKoXPYU13DGpuC8i3a63yHQ1k5yY5XH9goBUi5edfijStqUgJ1FwAuJ7SzSxG8yPkqzzz6Dx",
  "key9": "36jnDDE1jAyNzamjQ54hXWwqTFWQm3wr3K8qyf8n1qhVt1BWRyKVkSswEUNpnU4i1AEK3qmFC3fWVUK8mmN9MsxB",
  "key10": "414gAjXpowXPi25hXbh1JV2bKdHKeg1x1tbBnp9ACR1foJKscwZGt5UBhhCWDN4AradA5ShvmE2JPDTDr9fYLepg",
  "key11": "4363RSnTnBYmtKmpwm94TWywkbD5qWnnbp797NwhfBiUequvtVCx1KWG4R6tC279y5jPskjeYof3gP7o13ntt2KN",
  "key12": "5cSCrNYMf98umaHdtJNWoW5iLyQoyzewmuanRyAc6CfvEvaviCRmVppKrHheSH4ZCHecBo2L2UyVmEXN9vM4sVzP",
  "key13": "4dDx1Xd1zDQW6avLNZdiEK1Sg9TomBiC3X7iCB5stEZ4PtLA9614jRC4PHsbyAVBsb93N3meTyKfffaywy6e1Wu8",
  "key14": "3NebXocuhrmBTgu3zHRytA4LMdDgWKn1dZ4LNbkWh3ypGBZJd1zBCE3ArB8kDsHGBmR7BS6Js9bd61JGB5szp5EL",
  "key15": "2T2Pb4XSe3SqWddiHHyzQhEWYA88dAG9z7DWppr23AswFbjYJPCSadMcKprxH37Jwg2ze1Jt79CynLEsu9PPeoK8",
  "key16": "2NkuENeDTPMndMLZwWV6mMB4hGn1eX65RM36SXR9DK8p1cpF7iu7WUqxYQqEzYxsPUdkycc3Q3hJKF4r5m7a8Kk4",
  "key17": "2yiftpo6AvkXdeNefyVAsccVtSj1CzmT62ZT6hXHJfoU7nq9Le7eQhAGK1JTNYcuGYHHSuBXC1HsDtbmFBgHrZ69",
  "key18": "4KKDRNsqdstQKq3s47LFpaLUCcZmfBApYGmYB5PRgL8FGeUYH5e4MQ2fP3cA1bswvhjT2pi39Nt1dHhZ3bZyuFkF",
  "key19": "3rihcduQStXFbz9qwA2DVVDUyCEqwNJhaVi3xtkscy1hG9Q5wR4k7Q4p2Mg2eVdPsjWQZHdLM6Q2voraXPtABzKU",
  "key20": "3Lq88rBongoAhhRRDLD3Sko5ycd34GYiP78XZz4yMTfft9eMddDLqAyD8UHUZNgiTmTKujCAd3DzHGKh1gmxtt9r",
  "key21": "2PyA8MayuZaT6H7YxqCzJyMZywKwXbCixEpq9KdwNXaDreoyijaAmR7Yai3gnXM8hWUgWkdp97vzrypoLH8ofqsS",
  "key22": "3oWEnFGfhLzjoPJVNxtuDYEgQyjoYm7LegqKHZwCaEKsMyoC6aeaAVL3VWWEpC4osCzaWu5LTJQKXu14Ajr86LYm",
  "key23": "4QLuWRFg9Ay2XMVGAXjUU7DNtZc9vXe9yLUmtVA2pmFEbZeevpPXawwQGe2MY4YXKH9U7KBN3Yw4M7m3KiZ5zFFJ",
  "key24": "Z3RLFg3XyfExnfuNLbD5TLGWaS2EueF3Cd3hLAsepaaAFCXsb1SBfa4E8ebbHEq7dxp4EvUX9MWjN5h4xiJx13f",
  "key25": "4AaB2PbAFntawEPMi7zcSV17Hsg2jkEja2pzUXoQgU13jv19p33uu1ddRAzqEZf7QoKFH8iKgaxyKsm77fdPZtjg",
  "key26": "4SArWQ2wPFr6rPUy4W3kXM4XRrfQNbkVPAks7sbnsogwy9ameogDDEeJAahjTbpessiYKE1JvZH8C6YMSG1J9T2S",
  "key27": "4ADTevG47X2yXpdNZjZJS6MVe5ADCuopQyb3kk4mAFwfKXSpiexMBE7GJdKQgd1xdmNAiCKuKEMA9nk4nWVpNAKL",
  "key28": "5DzdH3Yi68tuhUHR4TjV3eSx3rwJUiSJwESYpqTZuxV9eqbyZZ7nWTLKbzQKZT8Bv8tetFL1AGU3f8AMwhS9a5NV",
  "key29": "2J51yX3p15Bj36xvusATh4kVcKNHsfU41Hqk9WbaGPaexfqDXbG5oYzn1b96RgK6zXiFuNGkqTGhC7s2MWHPwAxM",
  "key30": "4NPfvtsTmevcH6LSrpeuvcis468EhkC9XcDRLccPdecXw4f72Q9XqQio5cyfHhb8wKQnLhkgPn8u6faw6YzP94Y7",
  "key31": "5kaAFAa4Wj5gqsCyVQxrHtNgZutSvxGZNPThjgXRUYaX1swCQEZMXVHDPUhdUWSr7NrQojCtGVYrd98ovM7m1gxX",
  "key32": "5ANA5mVYLYvknzKCRayWgVBKj9u1KQZJnvZU1K1wXAX31BGgSPBrkAbUNbkSuNDaAjhbavUBfXrbDTTGG6KLWwPk",
  "key33": "3LJJYJgT4KXb8Nzo2CFU8VU4fFyf3FoabmQXw3t1oQnsTvMfVTGBD141SgriMdraVt4XwkPd3mF2t89kZ28akZaZ",
  "key34": "oxxPFepHc3LxTPoeQdmMhZ2AEFJcaNLRfFKq5Cjw6aZKvt2XFmTmjWVftkDoAXpRbBFMeo93s1AiTUCMjE2S1xa",
  "key35": "5pCYFtcufcKBqT4jpk9f6EA2HQUtdEwJ1TYFpbGWDxkt3ZvoXyXkAHEeK6Zvat3ZjY6LWRg4AcAi9CfBypu58L5E",
  "key36": "D8kKNqmA7najB3UosaZw9w1NnVK14hKRkNJx1bcQB282QDoVP4Vs9KkwsFq2ZR536Q7iryQGv1iT8jN11UvewqH",
  "key37": "2MYqU5vtcsM5NAtds9LHseui9LQhevBonmDPExtUZFakEVUWkokGM8V3U8yq3QtZXx3B14XgXGfJjAd5oTX2CDMC",
  "key38": "2FQcc7ZQaNuc5YSyYD3N9197rko8ZKCEitfKUDGjVTw4TdLyzoyerBDaKcEsACCAr3HQ293UobZHJrGEbEnpH6g5"
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
