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
    "2g9fXEy3FaGxhEddwUDbt5sEEMmffGouJDgEaoH7gJzbSQANZQNtgjjNjZLBbfZ5yPZ8hNfA9DyJi9q5CT42bKKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQi6HwUc1YccbCMqBXA9g14DxFCcJDsUXM5TL69wX446jXAc54SUKCJF8BuLhqJxzHmQtAeGgX4s4TRd76PV4Hb",
  "key1": "5U39twBcbQZuqbU7uBSbi5bzPMWGacs6WGAs2kXM6uov6VyjZWWLvCLBx7azX9RvL6kw794LuPVZjznEc6nfxATD",
  "key2": "3ogFGaDJbrtN9SntfeXW3WoQu5ryyn5TDDmBcocTWcvTcuBcEcY9hGLbbF8bnBymNiVZzQ8riF2pAde8Zxt6Atp1",
  "key3": "3dHJc45cHxod5NoTGRGVkkfsk3XnC968GfR3ofKucTuCCF8uBj1UgCPWCtsJzNE6pu4ZiZs2fwutefNe4t4S55JX",
  "key4": "3mR7Qss12wcRTrxoZtcDprGSJ9rWreNL7ZzjaLhdaS3A98xPCZRSCbv2YPLVbre9veyAQhNBNueFLujHHFbyF9gf",
  "key5": "5YNRUtEEN3vyfdbuoKAiT1JcgGbtm3ibVbRbNAe4XGs4kLzHdJET8eZPnWfk77UWJ4cTYohmc3HWtcJLstwrakY5",
  "key6": "2N82JWDhwe9dw78ochZucD87nR3SQpMjsKz7MqeHib4cjPvVZw8D2SRVWsfb4WuzTX4v8DgQrhNCfUsiFwDcKVg8",
  "key7": "TpwBo1AHKiYKS5Gi4HsgmgKhz5RRusntyHBi5ABdVK4MZsbrZJoqVGEtuksNvH2qfwYdkxqhLoyQWF1BLpUfobu",
  "key8": "zFhYqEYcPofmvruQrDCUsqd488cZhVYhCQHN4XicLZ2BpQesu2rkpr9YF2JPJPMHzFBhX4L2FHHZJFqM6WKm5M5",
  "key9": "ASEaD3jV96TmHTX8zNK6N113DmRxoSGZsmzdyT17QrvwgtGT6hYcNbQ5MSNzDiCC69iuD22LecYtbKpu7wceY55",
  "key10": "h7p7tMmzgmQCwgCzpFbx2C7kAHQTu7WwqMddR4r6JxQdpTCDejsxRwQJgBYx6xsHmE4QgdU3Czy36Ba5uREjxmv",
  "key11": "5tAWBNPycVo6yj81SeeLZ1ijzdarmHWFYubvqVatGUTwQ5DkW2rmxdP98cUCLg58vRepTQwXMnTQwkZG22D8rbBr",
  "key12": "35ZneCE246QjomZKaUPp6YGofSnXAdGtSWQHu4gEvJatQNWuxECbtWfzXcyJk14UgYrrcwqvG4HNRrjnbDwHYaHX",
  "key13": "g9kaxBxrKaEFC9VQUtY7zdVtAiUjefWY2bd6AbCczkD45yXa9RJDWXrse32VY8xaqwrqSL2hBWXFcB5sorbu3fJ",
  "key14": "65BbkGGVRrvETFzDPXi7jYAzBSSdGMckZXpyx24cYzq3gxG9tAsoXgxvpYHioDzV2TKsRaYbitUiKReRvZJmGnmT",
  "key15": "4G7f78g5stSG8mMf9Mok9bNAj5e2AP6tNQSKFxnTHqfwTrgbqTaQrYad6D7T5CUh7L25ex5nFALtcwAThEDucbgD",
  "key16": "3JkaaJhBXHFwhxLa73qtnCN2tzsAYzD9mwCAFTqHUGpMV9gagny6YPGNx9i9UyD7mirzSzyarqC8JuaVTSKgCuzn",
  "key17": "46FWo83mcCzwhvWuaTsUukkLHM5ZB5bZLToA9iG1UtXFJxCYePVzT3qZYQ2pm41YuAQPeJjMGkeV1Zk6MQtiyCd7",
  "key18": "2bMRpVj4CmNHR6trFfdBoMzrtpPCn4ozWMUo6eG7V1L8tevcHuYxoi81yr4ghdzsgD1GHnT5LZtmLy44FyUUX21X",
  "key19": "5cMZKtg1TwzNRf6pZJpmHuGpCL9RSk29WXSF6RQcqBa6BmX3qGfekpEJYXXWFSaMKDWHVyrrhf9axzNkXoiv2zx",
  "key20": "43Y6Tq3FLdHcpYU19zeQXwNqq36kfuLMnZzEJNpY8wipHBFRUQ8JSoU6Pmf4ZnaVFnaA6H4j768QwwoEb6kSQudZ",
  "key21": "28gZHBgDTMnDP5EMg3HSBUNjJwJaWv7mFUfEoceyKwuHeKRod8Znp5LMu1nFtmzjpQefrEJPCwg2D99QXXVavuPk",
  "key22": "2bdTrUYWnkBSwvo3i93df97RquMZkq8Y5WCY67SWxMCMDSFJmWM4ih9dMM8sRbPsmWDVW9iXNhkVVcufND9L8egh",
  "key23": "4dzz9A8TckV7FrP3byWqVR1uBj6PYhA9avEAvjNfMtt2pJ2HtqcKpqgVs6GrAxRNaGMoxTrhQnp4zrfwFrJG9jmD",
  "key24": "4MiecXyPewuTTWaGD1X3agRdEsRe9z13BV1vKHkLjnpyBEonM8QZawLuMUvahkCN84m2W2f9F75He99R6o29L51J",
  "key25": "5TnoMduJK8YYHYjAUzP7FQACHh5D7wLugLbKo9STqDTk9JRHBsb7HxqBUP2saVTAC2tK2mh7ovWo7VqmEJpKNRiX",
  "key26": "4wjcuAoi1W7KhmTekpZKX2Ca1Txw522HuU754u5w3KgV2bgy2aA7ScsLvyoAUsspFedhsJZFU8EA86oX55pUVTdX",
  "key27": "Dg5N2zccAAgbXxtb67E7X3dnS3eJwyw7Vi3MnuQ8Z7RZaChEkSFYvJBeionQSwD3knfCqnYDnzyShQyh2aPaT87",
  "key28": "57WCEMqNShMtUXwsrdLtCw1fwhXkcqtAQ6j48795VGoAPyirhJdZcNyF9W4FPfchTNZyQnqJXxP7L4mfD5FDvVmm",
  "key29": "2xLwExgi7nVVqT4fpuFNinxE2MkeQzMGJoX5pbcbP29Ba46Nsg7XKd1g1ktrsb3tKzAQLsQekdNdmKabzi5WCmaX",
  "key30": "KW1dPReCD2M3NxuskpmFxLf1CtP8bZyDC8YVhZNagFhXeQBGuyhhu7vB3jYwUxxrn2FBP6FssgJBXYmka7B2Ca6",
  "key31": "spweEBuoRJ2HBnVd9ZZKutAUm5aitxcss26vDEmXzBzfAVQtXmVJy9aFBHQDzfFTNk9rtG8YLMYAsiMpeMvD9JW",
  "key32": "2N7k2xvAw26tiyHFdSNVPnBh5K4MvPjRG54DhRkwgccJve1pCUVBHEzd8fM7SCs598PQ3URzTyFMfj4BY3cNMoVD"
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
