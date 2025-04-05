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
    "52VExRFBmv7muavpQzVwQCiCkyH4zUZGrBXgdmsSrDG6pYsMYt8qqziH6v7PooRMKFoEnVJMUJhfSTmw2HUQzfaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExiPKCxgQubtNZjophPzxRLcbJNZSs1XFNLpDCmkGJLz6uR9iz5ye3fgYqqFXq8WCm3VVGxtkCsMe1meQVAMhuE",
  "key1": "2xdNZ8uLs1hSkkX142ZdhnPLeN4UNMN2kyfiwLVkRRrmJFjMokgmf6iQPY7DdrRhiABZjxJ2gEEAvpVeE8Yq1Xkw",
  "key2": "51Gg97Cbsy6um9ecxihqnR38ALpahwAx47DKTURAkmPp8ez7u1ABKBEFavakzkgyXyzMwiAJW4dT3Lj5jiBqcGoF",
  "key3": "2FQFpkHnxhcqfBTVohAamaif2eCBJi653wvPCHU2mogfNQTWsh4RddbjH1BxuKLEs4aTn9LMRy3fmZJwS1pFBVuj",
  "key4": "3S7kaovdVWPKSBJTqiVhvayptLY8GZGhv9kVbxPikf56TwhhwEYt6AN3Qjb9YvFyTayNd3cjorUVxzNJ16BUVrqP",
  "key5": "3iq4F3guskgMjVEwKRPhv8E5SCThiFZTFjdC7ZJenjBbUQABczRcGs8sAjb3xKFUhrvkEdAd46vbZTbikwDPq3E8",
  "key6": "4WFaYdGgJrNttzM3JSJPsZDQvpmFHdFZ1wHv2tast1rAN3AG2wgnaXPfeiccmFWub4k8e9L6ujcfgKs1ELpP8ghW",
  "key7": "CZ96ffM44BY2PjDgEuCezQAWmMzqK84d4F2AKwfT2NJV7ro8ezMSaBbsoxcV5WofYbk7kPEU3AKpi5acJNEMnPb",
  "key8": "3n2WVBYL1JLCogZbxRrmnnfJNt72soAi6h7BPsaXmd5XpJtx7pvfsxewrCcQ1CD3J5VCL3t6HUZXwHoG6xm6idrW",
  "key9": "4866aZBjk2q5tPgQ6y9jAKRm4gvivn7hMujP7e4depEcVNqKSqGaWoC6Sdsc8MfNiXDVnT4CuPkg27km9tXkREwo",
  "key10": "2AHFeeTyj71PQpBTfEGQ2TMnuVNFc23tNCrVePZFePhTE1tje6PhWzpiSdCY1ecuaM61j9TnuQXDnVF8eyWQgZg6",
  "key11": "Knm6jw8UUBQzf1eAWw2DWzG2awCBH8gdoBo95QUSp7RudDGSG1Lkt3UQUk8CMzyQ1TZMCtiTYfqxWGPRjEjmvtE",
  "key12": "48V92KJYCQKC9zG1DFEx5nSpeJNYJoLLRLvAG1nHug62BGosmfFv58pBTKELRTLNwkpj55mGM47aHBPXtPTqHD2o",
  "key13": "4sWwkP1L6dqQ3A45XUzc3GnD76CZTfQefJ6VapprUor4k3HBo2PiUin6BX1cPZTvPWdu2ihanphr3b4VQEgueeVC",
  "key14": "4sgT6y8t1wewyW5o9knWBDGGmqBQMnXyk7FqWXiPeboNZwzLmpQFoqaSFv9sLbtWF5XTWz76pF11NLcvB3gHi33v",
  "key15": "3VzoohNdpDtjj3HNFEn7Exgb2Kj4SBJiLumf1YMTCPYg4QZL32EjLQ8dnZ4N9Pu9By7AqcXBie2y45Lh8A6fWMuA",
  "key16": "24Lh9gWQBskyrWhVwEh5FaK7bhzf18zUcv4ynYbfknPt9kfgLukmVr41Q8mcuEVxJdeFEodFLwNTwqcNgZ8K8kyY",
  "key17": "5bZw6Z5UbmkuKiokK7Z2YLZNBGVC92d4UioQCy5FXb1NCe9Rs6GSHS6gyY3aK1RzkndKLwVUNQCpLap6fiMuj4ty",
  "key18": "3EwUYwUZDSujvLrHWMk8BLT1rE6xoY1C467HTEN79KxKMmifwqk2rvkeBicL9YSXsB2GTAVBiPAAEjsvZAApzAcy",
  "key19": "3uGo9PXiaS6tGfemcgGg8EPcHHMiKFw6FnaBcR9ao68x3DRgUsT7W5yJPAohFG4QP1DT4XshunLkL7525oVMhWRR",
  "key20": "2d2j3YfWrxHzPQi7gzgz8y4MdjdoQVK9DsZNbaR8yRQyNYdx1o4vBBqTJRDMT5Dx2J1LG8JVcfL61TBZtzUhUxZa",
  "key21": "523R758Y4CVByb4VFPGvSWDWBHNiYhZqwXjzqZCjykeWs34fHNWcqivB5iMQjvWYtjpswxUmZeTzkkkpsaLAaPQ3",
  "key22": "3PAvhiiod4NTpx9SbaiUEJYcjrFaT7dUGC5b7HzPbqtwpFejXgWukBpuj2C79w9JVbpEfsod1SYJe5siHBjj6AUm",
  "key23": "4Tdi4R1MDRaMXMu3RacyStibUTzpEZn82SCYq1CFuqACEbycX86uKm3XynSWMvTmMYkJVHbRTuvQQS6wbKRhaJeq",
  "key24": "3Qo5dDBFdS2xGg6wPe9y7wCRD2qG1owpXbL7uN1614Bwt2JyLJPWh1mKDnZQToSkfpi9fjuEdEGLHUfSTmk9E41k",
  "key25": "2KRp3DcNCfdW9xPiQa85cEufFfaCJsqGquNYc2r2ppqZ4Mu5BbdotSASdSXroKVWLzNXeqUPNfWZSAkGEcu2pvQ5",
  "key26": "4WjptgKtrtKDJaZQEPD3BKwDzUAeG74azZR7DUohGQLhHCYmy4wyUQpd7W8epV8AWL5dF4Q9ttXnmfU4oTUk6utC",
  "key27": "5Mgo33b6kgHEfzVyxE6dwFEtg6fCCnd52FATz3RkPp8M7dYtTZoN6a3ZJNhoEyjQ8d1Bwmg958juCpDogzp9Paoc",
  "key28": "3bnaiBngGqbaNqLt3mWpmWiTvFAqt3xu9d4rp3D7ijYmcPNPM3tf6vib3s2okS7siRrHpbdfUCdPq85dza1R2Tae",
  "key29": "KsB7URvutLH6Tvm4fyHh6F5GQrD6jRwTY99nMJo9oP2NNpePyAqns32DGvgS69dGqNkkKFKLVfDHkKmpBaqT46B",
  "key30": "4CgREYYaVKvF13UwxWubPekjxR59wL8miSoU39Ywjxcg6ChC6bVYoCXH6NstYByEXDVZ4GGyRniMCYugMUYCwTp7",
  "key31": "3meboiHsGXwTwfHNwXgoMsg5Qr2aUp85HSspqpvcb4R8oDNgVtAHFNYEePjjQFk9zQofZE8kXhHPGU7y9EtLE9bd",
  "key32": "2gPcGCK2N36MSxQGFieXtuCtQiw5TkSoED37aRPXBP7AFv7ABZ7Tjkcrq1nBBoj6TZsA6g3ha2QgP1H8KYmaE5x9",
  "key33": "5muCBXYikNctymSnTQNWTTr7XfCxTGBBCgJrHG5kcQdYbR7dwoMYL7ZAdNiQ9QeqNvCmwbrMCsjUCKXTrWBKaKLv",
  "key34": "358TiiDjiPY8h4c1dpqo6TrTFtfg5d4gR5yrUVeUfbtCjUSv866zD9a9cseSv7w4JB4Edusc9YXzru9zPte3LCPS"
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
