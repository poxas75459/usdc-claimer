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
    "5NzdCTokUcaQqUq4hnTsPd9vXxAH6hemWn6gMWhyPi79KSosGEobQxbU7o6cMcgMPmF9kNCefhmvuGPN79umsxzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bx2CEJmph53cRDWwkrWjqsRQijXbTKGauWR6KPrXXQ4Us69q2EdjiuT8zZRiHpXTPXpafiYFUcKk3QBoz3u4aK8",
  "key1": "XTFQwUfHM3PWx2hT85BA6iaiRS1sMuNDLmoqHJ8Lh3TzrLXzK8c75xtYHR4gAmbqiga2bkS92fFQDeJj59GvNDd",
  "key2": "ZNqBLqPZgjLvHSqi1QhcLcAuvdufADdzepnUrxoiETamAxsB3MKtHZYnkEv5WXTMt2FwTD83FNyAsKvEJp8iLnn",
  "key3": "5p2bv3KcF9GXziHZ2b2dvA6QeyfAR9NQYa2UW1ZDDiYbJio8HQ7DaCU3Vi4kT1Rh9Tai1asV3Z53jRip2EPU5sin",
  "key4": "gZrWbRxJVEYNp2werVH1yUZemtWMwf8hHwfDEya6kWqK23WJ31fwDTtX4o92bB7rmEPsy6tGQJ84YJRHwix3hrE",
  "key5": "3EEDHwmok8siYFf5wziF94gPVKcUwcSAyDffmBAhMX4MkakgSpQ4x9gkZVW4TbCFt72Zf6pdWKXoHVoHHFycZe56",
  "key6": "3naERNxAjk2NzoA1gkXbqQSM4c1Jqw8DEim9JdxRASLFskrBVpEfDsaktsSR4E1sLadjvn4HLGs8gaaG4rE1ZfW",
  "key7": "2bFi9EtgeYwdDmUyjtPGkv4AjP7TYLMsqBnmAyBgacn5sL5WKAvD5Pk9CGZJmvYrQAhMmYSAyudXBroMP9ccbA5c",
  "key8": "33c2itacG4w9Mhjbc3Fti5wgb1AMvFYyAgPhxhyUhJAyJBQPFEKTGUpHV8RnNwMfQ5rpdSQ9h5PWXzVGZEKYAdyM",
  "key9": "2pm2rs7hCjQpZw6uzU5Q9QcjM6CA624DLaWAD9BEiUbkZEY6gCdE56iUy7qA9UuCVowGPV8ZYmtHvi1WRWeNtzDE",
  "key10": "5wXoKco12ru8X9LyiqpdbaszN1dwMTud7cTQgFQGSx4hqQQJsDDKyRmkKZb7FzoaqBC83S2rmiwK1M9NkRenfedX",
  "key11": "2TNmT1PRXgpF59aZwiw2wLUap62VhqeMAs5cQXaMdETb2iHVpDBr72NK8knxCo38S32j3nEcZgLZo8bdrxutJV4Q",
  "key12": "2K1P7Cqj4DkPw7VVmyWBnrbHMF3YQkrMdB2cTZUoMjzBnvFfNZhjhbBAgWnc2gcAGauvcCRiArK9fFWohoCbxCfV",
  "key13": "5gdJeWQwsKPkh1K5JvxzKZ5HjqqVQbpowFJ2KUAFby1jFrJbVE4jWdJhCuTDvYJEo5L3zpETAjBZREAWtGoySg5y",
  "key14": "3m4PL1DXrGFGrza6gvGyjNp3ituCLFgbSkDsccu276ynDKChT8uz2Zh2TXCyTftLPwJQAvQWJtVXYt5RhFusHd7z",
  "key15": "2Sz4zBYwqrhLTNSUtA9dX8EAFRkmpCJajQNcN3stX481yvjQBEz33HVKzzbDLXT8reLSjc1AR6bESn8RQuqmwv3v",
  "key16": "cenm1nzLDGDDaHibxLeKvvE5NRCZRymjvet43HKHoDagDQJEh82UZzvzWfZEKQ4bBZKGUiuszhUjfs8uMMwJit2",
  "key17": "4KoPvBD9dsAnxNimaCuFSaUAUQqJAkoke985wMpK8ESjWGQppch74mdEZDFimLtVN1NapPxaMrggFkeXNvN3rCKj",
  "key18": "5zXh6YtxyyY3ZihAjXw8rPbMJAYjfHYnUJ4nE9N69ptyuVCZgCACycSZ8nL1dw6fkmyyJke5HVgKDPjY59pfiDE8",
  "key19": "4aH672uqC1XYr8ZWGSyxDixXZgrvaD5GdgzkS9SgV7WAdVm8DpMuavjLqMKF2EVZijaHxwYyZ6NoAALubd1Mg9dR",
  "key20": "66WhDWCQaM7gc76iFbwvdwskhkPuwVAds142frr66DVsGJQ7mvwN6ErMRMw9BLXdBKJBvfi7gGHHXxP3RAC44Ne4",
  "key21": "zNSaHj9HTzmv7jpkLEyyfddV2cYyqKvsyMvSUfCqepkvmM2MUu2Cab55Wedo52E8XgTrB7f5piDXbr7azaXBqsn",
  "key22": "4bWXd2yFnmYfLj5yAoL8LnpqbEU3Ar9gpncsRQnkrV4GyPBf9JuTJGgRkYT9L4JZsWQiUQvxDpiutUtDPGLnPfkj",
  "key23": "a14hBg2N134hXb1FEk6NgPhWGWGP2YUKgnjZDpDmXZqqYt1Nh6cP87K6k3cWJqBzFDegr4aMejVkyk35h3ztCUt",
  "key24": "2GM5FRQ8CLrsy1dApRPX7XTy82LoqLpEL6QqoUmS6CMVka4KNJkzzjU9seSrBZcxCAYRhYhdJoNmemGrPtnb8mFG",
  "key25": "3qBSkNB1Q9KuKNCLhKw6y3eqzR9Y2ANTc78KFK5rFJhZcaqpZgKuqxpnXYaZqGJBHzQAoLcawAnPWoxgozC6wjze",
  "key26": "3J7bsP4HpgLtdJX5s9yiv1FoVaxKkhZs1xBvfJhceJRXPHijFiMcZ3CL2VsE7QRrM3QoYSy9CLCJbu6yiwNFHd5Y",
  "key27": "2LTaKae4nGKcJGWMiLkgpfhcKjEEuxcM7qX83a82Rfoy8D1GJW5yrFTTU5uW5Es4J6UgGnT15fzLb62xW6pDKGpH",
  "key28": "4USZ443uU9LDfQY26cJRp1FKzcwb7vpsAgqV9Y1yMPx2kJ2WyWt1j524kuTw8Cndmn9rZMqKTYdnrTEGt123ZsU7",
  "key29": "4qnT1XN1Kdx3UJQVnBMmG9JLfJVNQWvpwvXDEwpEaQSFguusq1diKK5xzGcPAGkxV5y2syoQPqF3YaKF4pv6TyGX",
  "key30": "5zS3nALxo8UjfVhyRj2uRNQPSJkkMHPfSwbHCmiqHGmwytU2Y9dx7ZZTrWbai4EacJbzi3BBrwmL41if1smrphaW",
  "key31": "2gkECyFMrgtr1K8dZBpLjfkzhtSqKBTqFXn6PvKvuzQDWPgkBp2F41QCiKcfhk2Z5y2T9TmxFde5CAM5vYKhXd91",
  "key32": "3zSJEQfP2xs36YnupsWafsJ4zwxc8JpaW99CbE1RbypfGDwU46BM1wWKpmarTbPmeu4vUjQ2THdUQ96wKk1R2rt",
  "key33": "679rACfKS7SKK4Wdph5N64zVo6dXf7sffqfEAMdnP5WJYnAC3X8Tx6y13QrAZ26Hjtxiym4Pj3WU4WVmFrWAL8n1",
  "key34": "5KBY1H9ae5o6S39FUhvuuofUnYXcovSJmoYWPmmgxSvj9BcCyjgDeGxzgXd6Mtx1WQd62xHoDQzFxGWo5d6yeATS",
  "key35": "4E4p1NWFtxFPb8zxD2gGJb9p9ay2LmCUdCvCfBAW85FgZz7raWcr4VJZzYVnDGhvpDDNk8HrA1W1Xb6PrCFqFTeC",
  "key36": "5SW94UoHXQikWu4B3ASqtK6omfvuDgiVvL5VSevYEmHvd3JdYhUiyoqk3xUtPwbkYvSF42XtcdvKvVL4xs75KfBE",
  "key37": "38vNszvNPMujrZ6hC3Wormek1BPZb8qH4BRb342ofgHJjNdRdzQLGJewG1DbAdHkj2413xNDkFB6aLyZZrmfs6U",
  "key38": "3Rn5cLcVypT2tFWpg2ASheQ47eXmQpzJt1WcJGqgzujxCM6H8cuo8spqP6QAKJ5kRBG21jvQYETsyHv3ifasttXz",
  "key39": "3w5HdbhVUBrxHVLQ4hwuEzPRTuuHBnazr6dFjk7mSaJAZg5GiQGJVJCv8QyQ5C2uTEmQPeAM69jFLWGkcKNkSpuS",
  "key40": "A9mGHr9s6QP9C6EEcaXw1EydDY1Vq6fufoKXZrhj2DDEjCLYMHg7r35GeDqtQdfK2quKZqUjL2xWFdsysY7mRYG",
  "key41": "3RXJ3ctX2hC3QdXs9qo82SqBjjXdr3SDGKFor7rMPy1JNrHJ2XF6VgDU64pHHHexbnkwpJVZYGog27LqF95FjHAX",
  "key42": "3wm1QJzP7kiXF58Hj7mFqYX7mRwWWbvFnRvA5FSdSU388Jd3smqKCLMsME93TbjyhzEmyqy1YPewqazTkXTT3G6E",
  "key43": "4JP2Xv7Jkj1Gfs54LoCmGxA8Zy8jNau7v2fBy4tJcpWe44jB8HhUsAQD8CET2tKz93xXHBTwMAaw1KVtz5Jt3CKq",
  "key44": "5PRYCauTvnumjKdE7nz32cxpr79nog5nRUA3KzQfPDnrkB3XSfp4CNbmNNecgdRBtxEMZMDW5CTgoYqwirGMgc3F",
  "key45": "3n3mCHpawkWRufL4JuhXNkuvpTQLbuvVrkD8F8eeHNf9dKwdXutkRHPibzRRo8c4K1igsMkafJ9KFcxwGhfD5fnr",
  "key46": "5fjX7qCwfnuSLDLHMT8PHBEoZ5683Z9vDWw3smj1doYHYawcgHVA8pbywB57pQxEQFLKoV3thZJNUHtxStGiTeMX",
  "key47": "2CFBGAASEjZW1j3fv7VNG1jQ9cmzdz9738UUsAbyHL1CKG5gkovX4WetT5TGWvkXSkcSmgYMQn3pbAz79Ytc9fXt",
  "key48": "3ELYzD5ZjLcGYDZTvW2wHbBo6MXANrqqGwpx2yStS9qZ8hn5oLW6ApAjD6yTdUWL73Edz2C112SRDKBBS3wzjhHy",
  "key49": "4kNLN5kfe4KB6Cg98Ngq6FTf144PCiHXBKQf4BaVjNhCEEyrH9VevSH3o7Rym1F5XXWLmiYTNDPDZdQbKxA5htLS"
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
