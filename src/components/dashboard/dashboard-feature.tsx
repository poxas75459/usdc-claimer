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
    "67Z6ZtN6eS7XNXP1NxLouSD3jMuTLzp94A6xjfJKaybUXRZjCkqg9zUsXyQLJnGgXpzvXARA8oNfJJCXVXU2PVzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYfemrpeDou4BQWrykWr6Err4Afw24j2HwEFn7PTsT26ZWGuD162gq2Yeestsm73wmF1YSrPuW96GkQ5h6iWrvm",
  "key1": "5nVAc9tkzKWcbkyPx2yaNHYs3o1ejRoEHChHhEocBmCKvfpbT7SoSfoVzNGBwL9UuMNAvdK3ENgCU1M8XQbvyA2s",
  "key2": "3zBVeFrrAShEkG4fZrtEanX3wwVVG26WLrVCd7pEvRumUYRLD7PnN9oN8M2sMUPFpsFUyDTG7JBKhxUVZRbGwQM8",
  "key3": "4BxoPoX5f8oqmfQ1UrXFCDH52BF6vRmKoX4zHeBXbjgmBu5B2gsjvmq6kwXWwYjbXxFceVWEeTFsgzxghXXj6Gp1",
  "key4": "31uTBT8EJ7DKpEoCTXYxCMcZqYZXGm6Lc3RAnev8UjqGWrQCMY3FdTns35AAgKfw7H7yeWBFov2jFCVT8MeP1KvW",
  "key5": "RFSJLvTuyA7a7q1YotDwZda8y2MsVr87Ck6YHpiohARnRFB92Nix4FAGtSHGXxrc8HFQXvEuxLkyFwyxQp92zoM",
  "key6": "ogvJq53aK1pCF6FPEpUmPd4G44gosDhAW5HRbgsV9AGLR3jw7MKCnw9tWej2BDsX8x1h9okYPKyLECkz6ihESTK",
  "key7": "aJ3dtf7Do2Ps5x6v93BPLKWsWUYXyUyN7nGNN5ta4XGywNVufRQx1iH8Kpm2N3seHneJkcxYg7nUWuvvPNbwSAU",
  "key8": "35edTB7xsz52gRXxwrNZ1qBWcRZDfPv2K8K9jQsaGPwaMM8chajnGjg1NrzY9B5DZMFyDx71i3UH3NcjQuRU1TLt",
  "key9": "4jFbTK16qf1vG5jgswTY3JmJyf8LhNoSJ64A4nRM7TmNZHRX4fF7ih2TMWktp1SXuGhmKV7Dt7HfCt8xiXAGDzzx",
  "key10": "3Zz5MZ3ptWGd6CE58LbGNGv6bF2G1XmWKbSAsa9CYRSB3ZtUENE2qxi4r4rbvm1xB6KsWUFy2nKU12ZriLjaUr4R",
  "key11": "2FQTYxL9dwkL9Z5ykSGSZogTUZUZQhS6GnPXKWnrTB8L4RkqmszxScWDagGUXaRMicu8c92YYMu7Xw6ePPqxBRRb",
  "key12": "5s1KH53ojU8ECnUT3287r7fE5xdD8MQPqhjcABpd6VqYd2nWpsnBWyS8zHFHqk7FARVUefwnxAUBppT17NgVSnPu",
  "key13": "3mPhz5VNjAMzXfGvLAZYg5w8KLsMtEfNUoRE7upRK1Eow8Dph1y2SeRAD2NeEeQizWP3gtYT6TqDMJv2sJowVTfV",
  "key14": "2QDiCDiW8xr8GW933qofJqTEhy5AtKb97MaZuQ1SAypQEBYjMA9Xs9q2VzTBVJzmWq96vc9CnW3LSmA5gwFx8RMB",
  "key15": "4WbvsHn8NvuDkdRFCHrvpj5Ltf5EfebTPkcG9gm8asYdp3wmw6uWryPoEG6fryuzu6KWwmhPJDMpFHvWUWv4Zq9K",
  "key16": "CDzzhqVi3SDT5GAgAisC1nrdtdHdhorexqBa6MVLdram5wVAT9X9Bn1V7drgrHn7t65FuBoakFLsMMfg1jHUW2i",
  "key17": "5xLUuLPdY1PFdz9Bzb83qDjzoMem6GM5bj4FFp14wxvtB5Y9kzLjNi2hb2Qme5M7vE21nhcMYH3B9Lvya5Ni3HM8",
  "key18": "g4V1QnhUAeBNJGZSjodKuH9CvAhUXnKjDoiANwVDV8fBfuYQ6w8qDGf6hG7bmY5J4GkDqssrYvCpJT7eeWXZY9r",
  "key19": "2H2byB6yQwYvipmB1rCfWR9s1gguVRBnnqVw33VA5JuiXjhgrCs7bpc1kRPGNkAPg4aPR193214aksTpTTW2krag",
  "key20": "42DMhGqygGF4k1rjqjk3eDpNRsfz2k5YzqFkSyGyc7LiXkxVGp5YnREGHGB5Gh9eqMs5wVfB3V7DdrcUG8w1EB2f",
  "key21": "3Be2SNeriw19MST7ADq3wCFP8d4ZuuDmzFAyHT2LykjMPC1VbUZV4Gw4SNW7c8xzJRpGpxgguoUGf1VtpEimfVBg",
  "key22": "56AoCtNeDvjcSd8d94S29MHU7aRxLhthKsUCgeh7nBfctvXTF1zsrxDP6N5evDAkosp2LujfYUSsi8wnDQuDkqx3",
  "key23": "29yjBdn5ua8acqtuhgk5F4s1MPDPpo7YgMYRoUYaJKjqTRyUsEnXAcZ2AegGBH5zE3HYmVjHWHgUbCRphQZNWime",
  "key24": "5GSsLKEYDWzd3EjXHdbPFeD6znSPPh8hTQoGC34sZGyhgJinSksreGoS8UcSuNXtoXgu4mZw1q82FEpPj45htE2q",
  "key25": "5xNAQK8DAvqH12LyDF1eNPgn3hwiAwJzSHXV99U4gnAa3bmSaCTpLA8f4xq6mtFmnnMiABRiL8vWiVGUupuVA97m",
  "key26": "5tJiRND2D3NYGaGvJEjc7vUQb4BiKvNJz5zent6DkReUCZzvgFNYn2MkbcQtBxNArnzSwq9aW9AGgQNU9bn2LooD",
  "key27": "A7QjcCuD7cosrbQSPi3CuumnRvy774CKMv7amRCF9Pi3MEijjWBmRwEef89kS5MquGHgwqjLgBpzp3NdwGhV8ML",
  "key28": "4JgsdsLv8uoMSgFkinftiAKmm95GpyZuWP5aLb7Z9h1fVQvkGHXw8yPQ6mFTdSR3VVqbgidcH7Nub3XtzjSu9bHm",
  "key29": "39twzwAGgnTvymASWSvnQZwuVJc42kySD5HUB3ypCXbbWSrGbtUudSdGTWxFJZqs5Hvy8qUMzAciNKxTAT2eKK99"
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
