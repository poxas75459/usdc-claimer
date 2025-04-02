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
    "zCRBiQxBysHfwP3bvCgK2qvasYM5JiTeWTmYAB7HDDccBZ6oQFV5Wmte7wceKajmtciXujCwhMDh8jtoPDXaiWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBkUnM4gkgxg7c4Pg7agZVxfV9Lh1AFQ2H68VryTYvEBFXyQgMWMjCgNukcX4i2i8usCyT6pdfF4o9rGzkHsXhG",
  "key1": "3KcxWjWRZSQJWRjSwm4FPZDVGDagASushTMGGTWTJAovb7AvuLGe8zfvPJ3cpcCM1fGyufYrxrCysaKfGHvLHS1a",
  "key2": "2UTKr4MCsizQNVbUbGS4LVmw3u8GFugeJD2VtH4pdCuptMcN59ownsxdtknmmuPish7fCTyRTRpdHYJDmiLuH1GA",
  "key3": "xzVvzwbjELvh7Bjh4w8zfM3jPhn3UPrjmoBcaCVsz2rDiBPfa7TYWiJWxxRBXEJgBj47PawiLoUJ7Rqa3oEq9Wn",
  "key4": "4xbM6vpgcPWRnNPjNFT2R4SgYVSx3u5pUZiiaoHLBCSSxrFVF1q9ff6xKjuWZdh6rARuLoS7gLHZZ1hhF93emekE",
  "key5": "3Dkf57YwJDY1ffNaLTGUgddXeWQ5rpznjTnT3A4yja2XeL1wBHdnmGJqSKXcsVzfNLqXJcYxGHDhSTELdkjBQC1E",
  "key6": "5Hw8evHbGZC6H5rr7BtsGEqKw3hc6zvpBkKy6J4EYKaB1kqrRxNtGn9Z2sG8xe9DAKXekSuP8aXwkcBASGsTmkxS",
  "key7": "3XRKabNiS78jCUYoYAuRVsdXvBQAqyiaRTxUZsFqT1cu26YQ8SJzZpAsMvP3N7iPzv9XFmZRzFGF9bZXnn3Y82s9",
  "key8": "3J71unvqjhVR9cU2ZJ7SnS5k7oRzhFFDKbmQ4HqYfpJrcHzz1XLuZi1jaGbpYmBV1otdMwVATECQzb6SAEdjkeKj",
  "key9": "aHD3Yyh1LykgrfSN1qYPsZiooDSrP5pwi4tFMXmP7uhs8XBxT63y7E8jVekMf8dT8JsHp7ftfzEo5gFyangyEMt",
  "key10": "w4y7RKHY3nD3ChjVX5NtwSpNiDjcuETTYdr8A9Y8kWXqbQiXpPnJsopFNdisM5UZ9pLxsDV4t8c4NWDM9vYQKY1",
  "key11": "3q1ov6xkRtb4j9drkRJpNJhTTs2TbzoWoh8YFf1R2MNiQ44uF1PaBGbzWUJP43ywqEnSFfW3PwNN1r8p7wZTtiMb",
  "key12": "5k1RU4rV2L822z9LpzKfd6zSbLqADwr41SnkQRQ54b98NsZCT51RBdjNE13sCNWpdaHM7REWePuYRibqFVQf4b4z",
  "key13": "5Giv9nZbQ2vNorTwiGVamALsP9LoV9bZM4YRPyPY8egt5Yt7ww8FVGv8PbH7r6tRKbguKLVDvFmj3KJjkMopsJKM",
  "key14": "2nhkSKJd1cF25B9cAudKSviVQnv7fhn3uLyMKLmcFnggeUjAzzSq8tZVamVWhub135ZRaMZVNLV1eR76FX5oFxpA",
  "key15": "4zS4WQwwcCxfdb2r6ddvZUoV3zSc6nV7T5TAByfZqfGMMZXSLzbjJYY6QChxQxwmXuWAV9SNpL4CmVw91vLrGrpQ",
  "key16": "35eKcHJBfmofgRsM2GW61EX1iGa1RVKxCTCjuKK3wG17jbRP18ySeRLfVjgBTCbKKkGey1UgdzGZZknLNGTGN3Q",
  "key17": "PCQvAbrDDspe2cbQV9jiQWaxmC1thnmLPN1soAzGU1AaVWx14aRHBFEUBfZejf1FAJCz689buMaV1zNFbrKSAac",
  "key18": "3F5MQ6w35Pq2nkjKxq1r8KNqYzpjWgzj6kY9993ieBPiAS5qMdJcqXLn6HZvqGQFcrByD5vzgcS4EEL9xTpzm7oQ",
  "key19": "FSFjj2gPgDsrUUccsABp3XVGCJNfZh5JBjW2vksjP3hRKXRuSsXELnAJgH5eFiGh8Jgw8pdnHNjPqFUNF8JtAEm",
  "key20": "2s2FTuJusVQpM2jWZRPjqj5pyS9Vjco2H6WvGH2MNynQExbmXb7DpGPYHcfFRRKJv2a2jRfs8yN1J27QwVg442EC",
  "key21": "2Ty78omotvX918k7P16GScnkRAyDbFajnSRWeEb9xMeut7p6t4246yD37U4kvqPdqi1qN6h8yVrknkHi8MSHonSJ",
  "key22": "eq4Rut9SvZq21jzQGEXpNfBLEeDe7vUbU5H4xAvAUyyJMLYLzEQCn1ia2e2Kj6aDj56DcqLo2pHk3WeYrSdTw7m",
  "key23": "27nx7TwbDLDo35CBR18uxXcGXEFA2qo6twFzRpaZ2v4qsoFCoEjAHHtCQG1yucDetb2secf9C8SQ6DXKJ8WpEcqw",
  "key24": "2AymeHkhDyDLvBinNr5ag76LZYbSnWymJBupe9YQ3nroJjS3bmPo1noEAeF8tjJCjUHfVZHQgmBaEEVFuoafYsMh",
  "key25": "3pauGZNLfSiJ9MK8r3QUUqnxGxHKmiBXqUpaH1KAahzLuqxfm3BJBGLkUjzzf6bBSB5sSkUsWMWisGpafiYc4Ze8",
  "key26": "5Z67bZ7h9cDVk8iQGiJepSQp25LHrM3tcYdhqksHFX5uhcpT7H9P3k27QPUiwAfCGMZss7FNr7q2z5bvDwj7fHt4",
  "key27": "3X8hBDQYHzQiHM4UYXAF2X9J5DJSE1cgs8DUQhiZ2fNP7ttWfxVdpKLWfgVzh61NTbcKPZKkUZFTco7uSdfEDpw4",
  "key28": "5Hzp9NwrNs4Qe4yRQ4XjrY6b8ptimbdXib77puVUxXSTSiyCfLwH6EUriqi6prWkFhWSNr4AjxuSC8rGhQC6PCRz",
  "key29": "3woUvz4Ug2zH2aMYsTK5bS3zgQL98nJCd94kL66GDtdFDVngT5iSyA4LLmfj5JadAQvtLC6ap4diwwuZ5JDz62qN"
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
