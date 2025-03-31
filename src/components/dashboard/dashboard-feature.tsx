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
    "5wnWwXyA6gar6fxmnysigZHs9AyKRHPpxbyi1c8ELXjkrooEKnwy4LK9UwbNnWAQ62q6uUMSRKwcMLMJVupvJrsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129puraPwN2HVNRsGjPQvRJuJC433di3Qe1PEvV1o4DNawC3fxUKQX5HXgJ7vfAm89jFLwBXAgNKCxHSZBCkDkRy",
  "key1": "4o6vN3TGK7MqU5zYKddctuU9cTez7RQuuXfyzPCd8WFzMemi1MH4FfsUhPZpqbQvbBY9c9vyt6PLTc7Th8hniJkp",
  "key2": "4JhEo1r8ZKn66zGaDuA7kLjMaphQbwdWiALNLaY29AjL9KCVhVCwrVwvvqSL5SnN53MqSCJosZqAoBfGRZqxtYWW",
  "key3": "3G8xSRY3CnSPS4rBfjKhKs6V1iFfUJV5jkVthqBv3BGKC1gZAxUB265NGDDadctnvULq2fn7mjsEQMzqYwvr8h8U",
  "key4": "4QEAZ5WMStmi8gqr2ovm1eEyqd3Mn4f7HY55bWs5m8LXWRBsMig1LUwaKJAGVaBCPSs1AGXmQoQckPA4YareyreX",
  "key5": "3JTh2jz36tu1D1ajiWuxNTVdeMaPWoATguf5njsgMGToJFB8iAfCs8nFToQxXRvcF2asEnN5kSGB1w3j6hQchonD",
  "key6": "5febawwM6PVS11potkT5YajkpvA14KWcFLF3C8f5YJBp6oRh9x4JgjFwSue7hjjH718DFU43XDsL3YE6rdeMbfL",
  "key7": "2KEB8qgv9fq1XKkXD5Qqt4YcwMecm3QozGjnbH2dWj8P2zHu2eUigScojFeeszG5sDB5xjs8fZzk3wvufbHwQwJE",
  "key8": "3su1QJ4BvvpwZGCTeCQBhJPm5mDqwG3nU85XbMyS3rkz9yCp93i11gHUfLyd5HbRFVDzATxYXUokE5h4zHTUuJJG",
  "key9": "HJjKFa4utDqxmhxA8CLPZ2jJHtAxdFSieFZwfcbTemqrYphs6f9NUZdxRnetUipQCNvtiYhag5K4FLvuRabAAgH",
  "key10": "3cNmSDoUgbkHxrViykMfaBntdPcKKGuJJmSdNZrDs2rUgsJWwWane2EBRfFtk8LAAUHd7R7A5pwuxXhJJ8UbpzwP",
  "key11": "3KUipAPPAfstrvx3aSGwcCSEbBR1kg8AJPRxHAG3rooijyu1PNvH5PG3c9a94fWagwG5RhPFicnVAK1eR6717cXY",
  "key12": "2rcSeoMoF5FEyM9umDJATRKYtZBQvFebiFTN97peAB5KNE1C5Cn1FTygeRSP1cXX93d7H9jd7Jxu8jG9PBMSqTrB",
  "key13": "2zumGVY4hm4LveRDopiYGSApV1goGCNKgrRNxzSFfJyfnzhdQnTBY3XSFcud5BfdmW8mhnJCgFxPzk69t2UgT6Ps",
  "key14": "5iiffwYymviBSxV9Q6JJTNRs4P1y5rGgZTFBxfkfUtPC1v6nKyko97rf4gpxS4dEJvmMiXSfcN427FavMya5snQg",
  "key15": "3CSuenVSuvqEGkgbwkgyHBy4CduyjjfMCiNFbuWbiqTWUjVNmcdLpvd2qFA5dL5XnCgtJgRMhoe2dRez854Mw22w",
  "key16": "3uKJMLaJgmQ2e8xLoS1oCE3Lye7EdQmAqUSshc1CRQ6mARkVDpNa9xTysMDnDu9pzPgiFFbcj6QTxWTbWaazRZEk",
  "key17": "4xytHJ4iCpU4xPySuRRaTTASuAUMmfkiAWsF3zG2YYUQ68Pies6XeYvmYsffxv1rB8x2wgfGi8woQ5hrmf3dY9MZ",
  "key18": "44z8xxrBWRT2o8XEev8USoFk5J638WjLBvW9Hwn7h5LJLxEBMvxaigdGdX47t4WRC4PzVnCpNbw4AYMLFACs6Wj3",
  "key19": "4hGci7FQhWF3aVLMLdWEAb9Ms5s9Fzt184Uy96fFux9bXKM7BpnJ2Dw68AaymZFXMTLJAMeY5c5x6HtoVo3SahYi",
  "key20": "3Nmp66KZqCWwicZuaUPHhFfCQB3hPRzyQBknNSpnxznJMKJirmmkagNiCRpWvshRRkRPxsjuH5XkMroUJtJkmaKH",
  "key21": "5KGxgXvezhUUX8ZU8eQqA3zaH5kWb6LTzUPi8feoabUyxxtLsaz7VwgEPvdPMTRMaHUFGNkxZBqhb2kxMxkx7niM",
  "key22": "5HTJuyJYqqttx3CQ1vCWLjRstgV9rWAVPcEsj2PGiZh5iBVFJmXtHMm3zx3F2FQoD3CjiUEDPAxa3wnWp5GFwd7a",
  "key23": "2vmLShkmrEzCawXAzZNbFJUAtLgFX11seohTdAgpkoEg9uxfqix3F3GppEJbTpmqVPfMxHrauiseRJDwN94GwZ6i",
  "key24": "2KEdgEhHa9D1XAq5xbvKmvgDsNxYPt6FQ56b9SGBvC8nN6zn8gzAdB5oaq2bBPGvsTpvfMSwm8QLWwhH2xpQDjDQ",
  "key25": "3Us13FHg2i8qdBzgStGGdcSbndkRtSUhDrabTBRQYLkvtjTFSB6ZmwU9mbwoLskAs3VJ4CXuY4r6H2YbeUgDxv5G",
  "key26": "xRBdmK2kx12W3i6CNMNwF3NchYDjJsA7kmcDrfcXMEwfQoQNWdm3hzAPY88gh1n3qm95VVBNQEZP1DcvBvHJnf2",
  "key27": "55azJqJxTjUUTEHCnT7JPZyDUZA7PX9UhB6jv7U3q43ANPk4L1hcz88tsTenpqdcaXjarf2WMd39K9FyeQ23xG6S",
  "key28": "3dta2pUgQjKcCke5c2B6kEeWZ17AqNVtmDMR8n3bNhJuBMu5LQt8PWc6a6jkeLS8fNuUT7ZHCG7UnaJRjghivZfF",
  "key29": "ZRChUZUne3raNed7tXEa5m7uxuLw6X1vwGGap5dkCmam5x1a6qidVKFhYZwV2nVsFd3PkAWJDPBcgCYF18h6gMP",
  "key30": "3QSUXpnG3ZAiqWHfvumwXjmF3BVFdzSAzjQCmLVj7yZKQacCCQUiTnyoahQ8oP5j1LGJ28BsGCtFTrFqz9Cay1gr",
  "key31": "54C4XuVhW6ZzfpvyfgJ9QYRdm5rEHtH5RgTtUJ9acVgSHwFisD9hTzUizzy23nYD5ysZZwcKN58HqWgF7Rce3bU",
  "key32": "3cFRgJGU1KQx9Jvtc8NQ6e7T4cEgTA5huNPvXdkbXYtEDAfQN2gbeMuWCtuGZhAmwFnupak9ggY7duKFB6osXU44",
  "key33": "5oqehcaoHykJumyBadizwxwgA1Rucbw2kggDzvZigso67MniB1DCVKaY3L3YiRfhwrjoaEk4UZhR4vYwffxG6qNX",
  "key34": "635fMCqjETvSn9hPLMxKS94mZvLZZNVTbpt9fwEtKxCdoCgikZTZdmj5qvaGrorAZan9wZ3S2NxABkxJTYiw5VpR",
  "key35": "4RD2WckxAV8JhkaMxmoCvHDNMeqZiNRXbnA8g8g7qNXKjtJjciTaxuwjhnzSgCH4AudahZ2WVpWmuYAZSEaCQ3y3",
  "key36": "56VJ4oaZ2wuEJtfj6mTfesbvXwvytZXp3rXSxcdRiMWPuHRv1FAtsS2W3pVfuKbmUR91sVvD4ztiu6AcsnRF2Ah7",
  "key37": "2WeZX7YpDpKRMSWF5nWdccDsTa3LYn5ac6osE91RfVBrgncCqNrFK2oxMJSbwgPpauwtzwk8VNSjXqh8Wmb7Ruzq",
  "key38": "3McJqpvFhqgzM1rUExaYhMUSZuwrDShFsWXm7BFgqX5jDAunyuyj7YF8xgkp3pmcdywyPesDnPkBVzJEjdPGSCvL",
  "key39": "3i2n3FXyU6j5MLDqtL53o49UoepvTqfchSH2WuL3DBMVv7dVLmfSn3zNFcUmwnrGKXWhbi5iUpUhZP49pLNSXQaw",
  "key40": "61GhimNFAoyegoGg1qZJ6E86TM4xXpwqdLuJkpvKT5BMskJE71v6Jr8WMeFBkBHKk9hYxMxMzDZ9m7CBWjXtov89"
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
