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
    "5NGsypB2PTRwoA373jAZjS1GRf3cYnamPqMRqkHKN4QewQJ4CbsfKmvzPEcdAnnDAiSXAhPdY1cBnWNHjhGcH6L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjpzLws2bKRLCJ4oxMztKGoc4a3fwPoXbPB5y5CDPm8zKZxfgqBpFko7A9CMnLe3PP6horvCwVEk1KDSMq1W2k9",
  "key1": "5s6JMvG6pa7QMAY5SmVNL6qK25WzLMvqR5swKzB86bNYcEZ7Hx74UuVUim7Ka7awx92ERtrsFHvegofGM39ab9Fr",
  "key2": "5srvVouGQP6NF6BtnhLe44jqSVGHdwchk6dSFZL3wJLXAajinLuoUoVUstobuyrLUM7Ef7rPBHqGKoHS7RzVzeR5",
  "key3": "5fRQGgkenNchL8s8vLtdiMK9nmg4Bjn737YzZSHLnRNaK1VvKWv2R5gWoKheMSaLb1yss427gHNQJnVkFGbqFQ8Z",
  "key4": "3S9ia9WCwMwfbmHkBcxqDPgBQVUzMkQG9YeCKNDqbMEEahnNKZJ82hFCVWaAyUnxA8epjuT75yy4QKtcKiifJdz3",
  "key5": "yFZYsMxbTLg1ydCP6xvWtJfHVW31G2FfGJFTFreHf55vzxQvUvgAnoRERRq6oGW81ZG4xAoVJm6puU6uuuWyT1a",
  "key6": "G3NYV59CUfBB9EfC4gbfSdwctuZc5LyQkf5Pyq6WstkqQ69FxeaB9Ai86qb3dfCvin5MMhREetWh5g58mCEg5Ap",
  "key7": "3B5SVaLqgSEkmMCq5cbTq9pdozAHaz2p5xDmntqJi1oFWkn8wA6eTs2Ax1egg3mBbLJBtCpjCpTeBrs7WHELq4zQ",
  "key8": "5UtGcqE2Xo6Wq5WxUtwi33XFNPKmCaR7v6bD5ny1JYdjRQ7ydAEbWQ3r6rsko2AthV26xUkB4ZedwaDCQJCD2oUK",
  "key9": "TUdNZe95ABfBc6MRk9TRyMdA8ax5AL9jTjFpZ8nteCss3fzVdKLm32WkPBsTaC2a6avmvEcTLPJay8WrBrqJ8dJ",
  "key10": "55XF286bxVWSPuHxjBhKHso3iEprjivQ8N9d7RrmciA676QTm3UUH4AGavEiqSbbR2GLAwokriPtoY5YE648fqUw",
  "key11": "3qAZ94D1C7VtzVykShBsj38pTV3zMtPMhg7SRbWzdDknn3aqrkt6cH83JFAzuYhBeLScEgvcKSBrVDUkWT9gTQBF",
  "key12": "2P1kzNReLu5FEpdyxwh3FMCMpCNRQJtJL8by2GfG2g5ymYCiBQXEPcip5HnTcC2moQbSULfGRtnFEttAsUpGsTQX",
  "key13": "2NrzsTZn4CjqPqGkvXYsyeUf22cXn2Ph5XRTiLatyxWEfZEWy13rFT4bQco8PngnTFggLVoE7qoBYMcQQZ28BJCQ",
  "key14": "48HhkJ8VKmJgQHCj29Vz229wGpCd6FwD2D2YYdmw2fjazeLoz341gP6ckaUYEH3zxxqdgPtbKuJNwmS21NFLXuv5",
  "key15": "5AHvVEgcbv3ucMMPqMtdgR4zE5mqwEfxt5WY5v5c4yHhUQsRnVW2pnbGLJ9chVkAnKRtTp4Cs7u7LaY9GNhSuKfj",
  "key16": "vgXFZbJ2HkDyhcSYkGBZhKjmgAxzzGbvpz6oZT2vYRPDbnh6cfdDrY6iCFDNfbMWTy5yojRqR5SN2g9THyvs2j9",
  "key17": "3emPSVM8sCyxC2hg3Nd7NFnhWDsmfPk53q1iAPoB64Un1zzifbdCEGGY4RpqxXM15yChUeVKLUutzp2gK67mBWez",
  "key18": "56GNLRGxgdzHfm5EPNDG4GPp8FeNR45sPet9dKLcNtcE8mHWkj1Yw5CAcPxiKM69pU2tHFgNa9BCwx7cdRtSXAAJ",
  "key19": "4Qxg5wmBqyVivUizTgcf7JYXjHisD3i39Cf12EJoKYBJgccehcKgSyvVkNc9pv5x27AgSK5a2BD8d3d2aU3FJ8Yd",
  "key20": "4dAts2Z1yqrszReqoaZ9a3wyNn7TQ25L8mVedSyUZKun28veADWQSAJW2uoX64G7DzsBj4PtmdVv7aTXxzWfJySk",
  "key21": "d1Tc4kxDXGR4aJbVNHTHmtjciP27GntLgV61L6yA44Vv3Fy7QZ1Q9nHcqhSedJUiXvA5fAH4GLJYfQnnmS1DrRF",
  "key22": "31jCZKfNqLRdhdAsSMN18ey3wMENByriCmdUJqB56syZEpTsFAnrNjfGg1jTQX3wCQbh33okQW7U7Grs3QxMMizW",
  "key23": "36c2RJ7iTb2NhCUQeQf8dEChf3tRuy4X8Kuw728F6erGsnBpNrHdchv2YuPXd9SFp655eZ42y2kbisRtjtszF2yh",
  "key24": "xzn3GjA6uiyEmpJtCAuEa4jLVXN75X5HN7q91naJ8FZESq799RdgehQSbqk6dyP5nZLPrGeHwcZmi62jXegyLQU",
  "key25": "22X6DTpReuL7xmQuQhCW2pktFZSSevS3mrFDjJSds91g59r4KRhxJeqZ6VfnMobRJgCYTqNQSwW5i5smdNRL4CAC",
  "key26": "KrnYTNMHydh2b7P8KbZxuezmyAApWEZmwn4ntjSXuyxTEmYuhqrS6TsjWtXjD2LVZihgAc3fFamDyGJvDVsprTA",
  "key27": "2ZPL17JCvJpJBP8u5SgmrUESeK6RvtQarnLvfiFw1EJSUgo21hww8WuJ38jAMZuCgXwe6BH521VkhEAtbF5uKW2X",
  "key28": "5uG5jC6QYzQ9zZ6E1u5j5hNnFovzzaNhoRWbNcz3VNMsZYJXMkXUNrLxREECo7jmR1g1Nz1XD3sw8aGMV3xVNrCT",
  "key29": "3BwuRFSRwAgPhW81YCLBninvFdoSsEJqxKX7PLNxbatMwKRtDa3JnrRSqrVFGNMPQjHWKBTxpCbmzNLCGdbHbnhW",
  "key30": "2D6ZJyTQc4UmwUzo9WypY3LsiR1EvSr1PZ1LTTdCttb7UrxftaXNdUxfVWjSJ84GZ4nRiRjL7gocdMS8r3J15uBy",
  "key31": "4p89DnVpJ43WXR8wLQ2KVTvHZM5v64GaKKpXtXyJwPiZz2ucZAT2HQ2fqpfT2Q5iENueK5m7HYhmg2LY56Pg9XPx",
  "key32": "4TB9ieEstqiTaywmDcRq6BWfbwr7bwXKkXwurV4eL9d5aMTdyZftH6ThJDGSfZ5CPdLwCZERAduyaAwaKu5s2Mp5",
  "key33": "2g86kn49NW4aaazBnKgD4g5vHdrKU14i6WoX8JWXYhSpC9cEHiPgcq1rNrmfrB8DXFUgoCjwN1u8YSvLmqGkGfsn",
  "key34": "52dKs1cp2bLonL9xkAj4sPuUTGkwZwedwwkos8Efh4S66hGCX4b7qmPrnfYcLWMZFJgr3h7X9aCayFKF2xpGCBcL",
  "key35": "3iMXmKZPBkycRk1u9G4hFEWBPHSYCa4B9BaRDRGeREDM96sREsd54dMqS6EarESPWK3fVysbtFueiWhMgQmEk25Z",
  "key36": "2pznan7VmSTm4GLhcjHDNXrCNTxfGJZg5ps5SVFBjJNDdYDH2YxJX5t96Do92xy527afXq1QenLWUEQGv8jT8eWG",
  "key37": "3FrnhPcm7YSNmQqcCb4yLCZVQexdjkM7zQXTmtMxBu4xgb5uyputFpvVXDJW794SCydzU4Mqpmh4NoekED65GunK",
  "key38": "55vvuTTRbPLn3qVhGdRymykgezbWRu2WvqBfVbxy3d7F24eHqgpg7n6iZEaTfjxFeNav9giUiKvE4WyHckL5dAfL",
  "key39": "1nfw1GSeeNuRdgN6Yuzo4Vd8nqZAxqakMTUwZBqFTjh3g83mCDzFpcrzH79qzbLHtQgcC8hEVKsHBqrwTTBzt25",
  "key40": "4QdgyB1NTb5UqUHQu4RzwSLt6wYKMJy7QjV3p2tA9Yt5avn5BTnaizAy3h9CG5JbU1SZTdDVyji7tJ2Y2RayD6po",
  "key41": "2dz3U7x3xvGMP4o74Vqkzx7GwWC9TwUmWEwNwgWRRbtKyrSRUSW4LGzzbauUpPpU2saSWSsMZRordUC51K7TdHkj",
  "key42": "2kdzDvTS9bow8RTY7qBsRnhqyjKUEPwyYhwE4w8SwYshejQdF5LtmkUVKpNnEXb7eDB4fABTcpKBEodCVWUrn3H"
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
