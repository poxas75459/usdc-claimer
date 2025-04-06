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
    "2bwaLDiSTj4MYk9TFoq7oaAEWirY19cTjZQAn9pz6VkGqC5ufPdjskgRJ6JN8rMAYUnV1rP3p7UULz8YULCYZMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWbxEuAnS8K8YDJwm6s3Nc1cDzt4sbWVHoBRugv4XfLEi2zZWqgD87oQiCWGRV1BpFFkyoHwAsap2jKyNcV1Xqa",
  "key1": "321ZzTzWWxPjfP1TnrcuU4ZS6hUjMonF2pYi89Shan84Wfsntmxd3XKp4jTc31MDRNp6ywYVRp2tzexc4YxD89bR",
  "key2": "49LWiU6tmzFYoMDrgAM89oM3o7HimEaz2CY5ev18noUvbfk3Rn2FFo2pQivxHBRDpzGz87SBQZMEY14zztmGWXfZ",
  "key3": "2z62w5FRXVaDdQ2i7xhxsWNDT2T3FjQ17bik1E1FLQpBK1fm1QCm7XXqB4YJ87sViS7bz2747LsnSBsCLVmeHPf7",
  "key4": "2QHQDvbFFxzRntxbVtc9ZDNgCsEeUHufo8XvSNr5gBRgkGcfEKM6EgLFCM8j3Zw6RszGHtTPJCmEYmSK3L97qhpr",
  "key5": "22Yf3cuQYqfeMupESDfz39tVaqMXKZojLXQ7Wz4zeXe8bZYmqnaewvErFr3L6VkHcVc93smAQkGvfKwS8r8uStd1",
  "key6": "cuYCEVKRrF8SVkjAjstsfRuWJeHYk1ZAKDHvfVvfg6fKQ82Gdv2G8FGfcXY1RmCDxMWG8gpV8ACWbux1J53cmPF",
  "key7": "5SfGR7LBdqHVLtJD22cVsuXqMQb5TkTFiSqYq2SpQ38mxQEyGzTGSZHog1N2LoB4J11847vtpHV9aLAiiMfT89o8",
  "key8": "2MTmjdhFjyHCF7afZ9yK52mWR25wdkM4f5cAqxrcSVicNoHLCWYVdFToRAJswvscKVVo8gGgsix1kBzm3VFWvwnG",
  "key9": "5XUPXoWp5ejZmeRL33p7Yy4bbcZMW8cPrYUzQgrHciG2pmE3ry22WZGVagQ1K8X5qNm5egvnEChxCCTpS6v2wToB",
  "key10": "2i3zQXoVeXzzmTtV49A9hvgTjokhRn4rvcMpS75oABUpqGckJk4cCBrN4iELhbKbugQTHoiwZfx9SUkqdLTztj9e",
  "key11": "53UkHoANtvyUWJz61gNQqdkQPdUf3PeQt2FzezLSByfn1ptQSXUj5aKfhqNJr2YjBE7kPQWKA6gwjCwicKaguF1h",
  "key12": "4SLWvqkPWVkRgY2m4ULh9XWYBkK2dW7JiJs9tRfeD3xS1mYSDwfHBf4j4tDFavGpAcVfFfQqnXggko5xgPQfJmDA",
  "key13": "4XKcdUk8S1mf9qJGvnZse2gvGBs9XdeH3X1wsxWE3g18bs6xoa7DKD9A5eUbqWof9nLXKj8C3a4dYgzdPavGsaj6",
  "key14": "5DijwA6uUYZ7on81uGxy3yrEbgoRiC1B1usRoMitcLv62QRwU3WjdzNcomqnSqpmpp4wNNLw6BH3SLJXYzBhakGE",
  "key15": "4CRNKVZ8TDMQgqdiJ6DP8kciJxU6zQfShiwMBTaoMzEi3jz3YmhCCC9RU3Zi9MFSJeRevkFgYAKGBYDdumoahXBZ",
  "key16": "2vhGxJZhFt1j8C1n9AZRSu3t6ceeZfQPhWvUA2LtTcWkhCNjot4bYJJJEQHEvkyr3WZaXLHqFeRvH64HiNLNMcr2",
  "key17": "2wvGtZnpJSq6e8LBfbMQejdfCoTBtdeBqQXYvJj2hY2JHHAN7W7dMRSMv4t73wt1qLoqBw25sLGM4iFEkdG9RFci",
  "key18": "5gGp4ENhRNZ58f9dKkANaiB2vnHKNoSdCFBoQdjJsdD3FdVzRdjEBMPfmGN1qAsA6W29PGVXxHySwV4NYdsCVHEc",
  "key19": "5UNoYRtR8c88VPyxWJdntGZ8dg9upGbTVdem2NNDDX7jsozuSBJYXYRTxXjz6ipAKxSFY8Be5izNVF95gfmw4oWt",
  "key20": "4gH2UsHdMpMiuAm8CGTJdcMtuhsW8k1RG6XaJM28hsubNuzrteXBtSfNRgp9iozcZV2zhCnSWc9KEqun4fgbCoAd",
  "key21": "5RAWMHacCmYT1dNZ15jbTNBCgZ1BwVwACU7kvX8HbqX3C5rB4Bt76kBWzrDKdUcA1D9Q4Fko5voP5MA3Y1VgRxoh",
  "key22": "5VqRSGLy7nKmyFeBvBeLkQuQH7aed7GTAnC4GL9QncnNxLgTggxLw89VcESHRxoGsDNpdE5A36A6ttfYaNgy5sbg",
  "key23": "4mQtBEJT7vGNv14PshLRoFfGJTsNn1sTyLLCjoAGiQHRCK2rsMa8XhsC84cx7fwjAx5WDshdPfDHXFEXqUo2XaPu",
  "key24": "pwTcJHm7ppGijCznfDLLSU71ESJ7sA6ffUEsqAK57AuPDY6tpaYGLaedxhpVBzYyqPSTbahuzcoRAED5WHYZ927",
  "key25": "2Zm2fKEUtCnAMNw2XUF8JdTRxPf6YPW57VrzrnFVKwQCLxAtxmbkJEpJbjnbWqs7zQmpBeoTyv1ZdzGrV1fjjt5w",
  "key26": "s1LDgsYuKjEVbRvhCK5yx17SbJqPXA7PbHH9reM6zDuAxVedge4ejfwx8FiAHmfgXGheQoipxKhtfJ6hAojJFTs",
  "key27": "vRs8DDeAkj8u665jKgkT6uDmfcTtRXLveCUDrXCS8k4uC6CTexZn3z4yttA9Uu4BucmubPrLWDcK5Uqw6YmHCaE",
  "key28": "5ZLHcYwDgiU9GMwxPcebN6Q1RD5SAP4ruu5WWSPTnVc4CN8kCqny1LBWWscsYbWxdWhBRtLRGD3HujBFYpzdw4SB",
  "key29": "3Ymue1pehoD8kbm1YxX8T37gRjSuQSyAnWsvqFu2xBmHjxzbQW97yKbL1YUhpmxCzWU6XnpR6CDFVfFD7xbXFmer",
  "key30": "4FUbeNghrjEFFUHfVhRyDQg8G4EpezonsiyEeL6Byy5DYXSgR9k65PQFD6CNeG8zKwJe5GhP8khZxYbNmSm5pFze",
  "key31": "iKSdop4rLKAb1SegwC8bVL84zYuFsfwZns92YNnqXaEMN9iVDEvNPoj6k7p6CfN6yhjAmnAJ1eN9iyKTAUCBFXQ",
  "key32": "2b8VCoeomkWnEkdSj1ov2x8pM9KAiHpvzg3scEci1U2PuFj5FfGCX9oUFaXNL6Kz8MoTs1tw52SFg5jfZ1VBzD52",
  "key33": "61Nu7FGoNgDGMA81bGQf6CVHjWQQyUQJzmy3NWkAcKbsu4SjNhD7RkSbr28ok85T7LoCMDhNYX4STkqVg9rBxmvs",
  "key34": "u5dpS6mKTEwS8b5pbRKykyJzmscgEqLQzLMohaTvz8KgeR6ZiHhrBgXpkTj77fbPh7YptXmp9oRSKbDV5viFSGZ",
  "key35": "57kaZRrv67vjXsK7JADaRKwXMAksPBqfgzCcSdDiw78rigE4FpLM5jWLteyZJptbBdBcageoUXUWTmNv5cV5VCCe",
  "key36": "3WbSnrSasa8or9UcbmLUHVoMEoQsUDmQvgKtcQ2Deief7scwPBcUckH6qoVCarMZvPd4y5b3vRP7T8r6SjoNGyGi",
  "key37": "3TiYgGU4uZVTZbo7v71V2Ava4Ntf2zrxEvUekCYrHoymBfauSrdnbABNgKt44MSdxYryZtm1EzmoCD9Uy1NegXqc",
  "key38": "4QJsR2NkhfxKTwAh5saaYacQ7PZSkBh3m2ao6TDxUQ3U1AwnwZF7WFgLX9gNwxMLYmUNcsNPjnxQpaWnHFGKUJ3V"
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
