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
    "2B8GfUFFQHLUnwHwy93a62kEPNEH8TLZ1iNYDg4dh6eMApCq57EQzSt7Uge3GWBDsnUKsAbyCZnmoRych9J5QMK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRJXkrccPEckecM9XHXwCN92Unk4d44spuBftJ4QvC2GkWsMuoVaGJjoQWaoLRnGG5GYWUpSZpNBgN64rotFHhi",
  "key1": "3tEKRuAwBiwB3D1Ad2dTeviRhuNWr7pEwLGjTjFqko4i1X129MckswoB4YfFincgTJEjyNpb2Fwpc1hKmaTDe4aG",
  "key2": "5gran3H2rP8LHFtLzE8P8x54AnrWkL5sVfs4GgCAuDSpMKXBmptppJ9DggPgunxTyny7AYm3wh8tifWdnYXKbLCQ",
  "key3": "3Ve3ZoQ3bcXkdMoRnXSGGyGHx458su44oDzEhBY9NpStfZKbWHntZgsK2XaBY8w1DXtyDava5wUsFEKfcEDpBGjF",
  "key4": "3nn6AARSBb74wBBKAzDFrAbNuobDvBbBXC8YHktDs66xiQLHxAWcjF9dhZMgB4GbGR5g91hwNA1tEZ62ZpHMFgF3",
  "key5": "5DrrRYe77FFT3kKNH7u6ob7RPxzDk3cQMdfo9cgzRPHSd7JeptVKDaqUach5tveWWGuUrtbDgozYdsbvT3fdf74h",
  "key6": "55V2h4C4eNiPJxxBHm145Dg5Y7fp3y4dgHm2PqzbUHshcqGJuvNKtBr4TW95VtZZoGepWMsoYEa9YkuQYuWMuhcu",
  "key7": "5z8vinbEkGxCchg12pedbZEhhhpDRxmogfVqAdrTGbSJXVuEo9Da28PtUaEfRVhpDTFs3Q7ktKA2hQE1VP2Z6T4U",
  "key8": "5EYE3kdvUBjp4AWV7GP46h1yPVTPWMSQsSXd91n4jL9rxS71UbQ2atiQacMuqXQ1d9t6154MR36zBQUyzEwTPUWi",
  "key9": "2sETgc9PgdaEgDuUS6DN6Az5AJujC3AeukMopSBVCvZSfmCTLLMvsAVxK5SKKLXpCJpa64tE6e6jZw3noiyjX7YS",
  "key10": "5LWQL38ewwrxEWrYYbXWAsCwwD6c9rSh8Zc9jTizGKBCEBkuzYoGwAw5jqzEMaj9d7Y44akgjLfmukfxouWRJRpm",
  "key11": "pyWNzWPDt4aQDjVyRM28KG7d3kFngAaE9wry9MW3VNFjcA3CTfSBRZHNqfShFTviGUMPPM4GMoQAbEHMEWyC1KK",
  "key12": "52hhTgvin7mmmeqnndCC9k5t6LWpdo5MNTpjVHEMB7R42BNGgXoMpHwArdQ5QvMuRe25LETFiSBorYLiiKu7LwJy",
  "key13": "2DHa6B8A5ssrMQVVNJKptMVH5kvJfvzjuVuFJuPAz874zyDPCfTjRsVymJvEhb4rCdy3nSYE4sAew2TAoo7uLUsF",
  "key14": "3oRLDhRkytZZkoqog2KvFmxPwBX94wrYCCW2HX6n4rqRoCDGLWFyXtrzcexSMp7n5G7FMLRZrAs7jb7YUfeDYBkA",
  "key15": "5JZPuzdJJJGNz79LXntZ4MFihF2hPeKYbkWpa4jhQY4FvkwUuvHd86cLgf2FQXz2ciQZfDwZPPpiahh5y1y3Mxn3",
  "key16": "4z6HV3aD49t8DRMJWcSrtW3URRnMupA5vCkgw51gjT43WR88P4iBSdX4HGVaehS6ZE1pnw1JuZzLuRVzNWEqxse",
  "key17": "4edHCpFUgyAKJd55Qud2ohcHg4xqUW5Y5Aj9VnfEtVRgGnyxcoTr8Cq3TGemsuzLucgMZJMY4LhajoZv6BLyCUCw",
  "key18": "2xMxUpF22xASc1RHpt6BrM51RJGvE2jYUifejS5pi46nvYNrbxPbjzpiY4M6Dk67XcjyCPScCbgSSgkemgGpi8Ya",
  "key19": "65KVNzf8Gk9WhPvXEWavyQrGto4pMW1Qf7uPUoXWF61MLUr3FbAZ2wZRjD1jLyuFUgMavBpBW3Q12H5XeciYmBai",
  "key20": "44r8bs9YLqNuqdQR2pwcqp963r4Qj57RhPwxmo4mvq7neAyP3TmwnWCAH2z8JHQBAe66Lfdb7Gq1dBhPApv3aMBA",
  "key21": "aDHfJSrCiEJJMVWUBBmnBRVpX3eHSRZXVEezE3kDuasuPShGkWWaPZJ7L5s8JUjWhy6SritreC6uDBKSfvJir1G",
  "key22": "3rKHosCpPqAQPXE293fZtvYuSpyYa9z3kNMrnag4UDkTajtYT2UpxRB7sLAr8YknWnuW5KNfbh5JTBdPqrtbUfhR",
  "key23": "4TCN8NA965Mrf6Y8Tbfpg9kEjY5Dswdg3jv7SCTi5C9RMSD3nayYRE7pXTFcaNoAFp6Wbzzkt1sJJNZEXEDrADRf",
  "key24": "54gEaP4PSD2uVo1UYFd5ezpcHQ1pGV54xeGiKBXqAvTSouTxdPcs82iUgR48144SLBwaEpB7sY12TbSumSM7qx83",
  "key25": "23ZB5Ew5GiBmmMNsqrRQMnaQ8rWEdWqGdRiHyKywLHAK2Wv8kxNjQ5hCh82rp7pXkERyE3AjC7z3GG3Mh1ypMmoH",
  "key26": "3oQdPGZEuu4tGB7N3Syx9tQ4x7MjZHoEmTJzN3ju92Z47j5wJZg8GQw76GNEt8zsm1gZEFMdygmUqtucxTSco5bC",
  "key27": "3e6DTJM1rsJHsG5X2gYifAMwtg4pg5un8iwAHjkvTqqYFx9NsqLYxMVFxFgZMmCvExM7s4gpeeJ2vWZ5bPzfDDzf",
  "key28": "21eXyVWMRnKCKSSdUnRKD7Rg3ReNunwCpriLHXzkCSrMNPrZ6haDjs2Nc17TziqRGgUSPU4hpFPEcCG1g1EhGpVD"
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
