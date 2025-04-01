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
    "3pdF9GrK3mukAz8jTC1E7zx6Va2RnmEg9J1UVtG5H93XR3eXeYo9Ubty5sKKk2V6z9pC6PwTR7sAUg1c2mXAg5X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ruL9WJEaU8GN3Z6X18TU2Yfdmk8zZTPx75gkn9ywAJxN8XwmgSHM6xhkQkQbkyiLZLLHDbfXVgknvVWcKwngu2V",
  "key1": "5Wn5di8C3oLQqC4DDX2R213HexVPqiNgq5MeweU5Vef7Y2LWHbw6tsTpXWnhobTukNnvuGEeLHxdPZusSFy93YYd",
  "key2": "3Haf7oX7PgwfjZ9UfZnog5S7XP6L7WiNXRzxaoPaBZGK6nQ3zPa7BnYthYhros8bj4aHcvJSdiabdG5h6Wp12W7u",
  "key3": "4F43Kxiosb7iTUJUPuZRGZ2XZvSmhyZK2akwhhABC42bPRh55YuQGi3BGEZ4EEay6iK9j9qezeC3Bck7pS6FrAkV",
  "key4": "8PUYMe3jHFjns4PGu9WfD2yMYyYhYPXNmQ4Mpk9hLW7UqzPkZur2B58FoJC7x3czEyhGHLsd9DFPnPv4FTh6Y48",
  "key5": "32BmPunUXBbWdGPtsSqGh7xd3VaSPCDWFuaVTSjxRqd9R2cec8oKWNqD5Ra41bUJPrKNEJTbjEobD1MyVn6eoUGd",
  "key6": "3QixzTM42QXRndbv218E1QDKyy2H63BKXm516JAZkx1XzN2hMWJxuddbT13t53W3Lf8ajfq8AGYvYVGcpuRnC3Be",
  "key7": "3FYFyp4JpxZSfNdcBBg1jaGkL4ojXi4tgXKyfLDFegzXXgzD1Y1dveuvUwH1AifeAyULiR4YsJZ81xJFTvaGXWpm",
  "key8": "2spR3VnkxsYu8jq9GyzxKFKHBqSpEhSHbcyZq6fQG4RuanDrJzyZaoXimnbgyvLHTcftPj4hrsr8VmSXzhtVQpTo",
  "key9": "36ko3tHBxkB4tT5aTQjVS5STmKeRM7T8LNPj61ATEMHGSotn4NCbv476CQLPXy3jNhPdsMy9pdNHs4pPE8c9ZdAM",
  "key10": "2MGnofk3wQGoFBTyzgzeATgNzKnbssjdRvFKHwXxXqcnB9PvFuKGSR8XToqXcdhQGvjGxv59VjesgpGYYEjrn6PE",
  "key11": "5BUn4HB1SyF6A8DtSZ2vfQWK53CZLSckfL9YPFN6i1q8mf2NBaGXXqzqX5JR1D6L62tEhaW2aN7WX3S1ybDcqRm8",
  "key12": "2TDapBCwa5A3vq4WRMfUDuD94yfc3vk2miRWETVcMsdyWc2UKEFViwGCxsx6o5pcR3DqpiZNZq6XSf7NF6sRaMwA",
  "key13": "gzoqfGjZkqiSYFyRm5VpbawmZUFyXCbME7beMLhssHGWCFVhpeXBJff1uwM4h9E9S15mBz69ezFMucgWMGwS8pv",
  "key14": "3DeLDh1yqQY77mJWVdX2kP6ZJUG1NGf7kLDuuC9xSFGCLnNSSR8TbwpitKTUsnMFP6o9d2cHa7Cxg7DChQaG6To3",
  "key15": "2KSh89J8LvooC1LjuX4gQKUvwL2zE8EiSRAHY1fg37NNYFRQfioRDhZeYZ3sakmCfgExsmreZShHZY2P5bDnVt2W",
  "key16": "2dtHbQHhHoRDj8g5XiazP2TtbfQP3ETSypqw9KAWecbr2cJ4VDTciZYPyLjt2S2x1d5Kx3LzRCqMooAgwkfpypyt",
  "key17": "2RUUXJSFH88J7ZVY7ZBtZFrsUTduGfybfNEvveZd6VyEHhVVwb5kzTSt8NFSx7yTyuFrXsvXdKppgCoXsskG7nuT",
  "key18": "vi65ajkkaTZ8imbHrcg4R18uKRtaUe6Nw2TeVRrhCxVsmRpWkDn5SuP3HtmUbKVgqCdf6UTzPkun3wjUJCdJhw1",
  "key19": "4joXj2FSyvvwiwSTQzcAGYYytPJ88BgWhxcu6FyVBfLmiebxc9AUTaT4p3gVLy6w7NR7fezH2A8TDbAcy5MZGnf1",
  "key20": "2v5jCW4etLPBffh3N1w6hXcu5hGgRMkwt15qxR95FoSJrhmGyTUpcWLQRKCjxBZHujBj5rGqiN5sA7VS94ihxHG3",
  "key21": "2tCfU4JH5NLJYmQoQAQpEL4YpH2xjTHdraunyQyTZzFBwE3D5n2A5NdESE8UyVJjTo37d7BxWzJvb45qkNyFjSta",
  "key22": "61RUbPbg6jQGWy4RnLPW2w4CzytX4CTWcaek5XnycnyMLLxcCvVxnK3fURGgeSu5FfhdrC7spGMTFgwKPRvtd3UF",
  "key23": "Q74B4LzqTb6AsFiRmZx6zubBHnWGqBBxnWFLJ38TykcVXwJYCQTeGBLXUpRNk4nDaGWTqhanm67Ekgz7bSsG9JH",
  "key24": "2LKWNzRSVver7xQBeAMiSvHPJdESH14T4ek1cLc3PeozghWdNzQRCA5AW1KQCAVUu785B7zwYMLbP84ybBQMncAT",
  "key25": "5KEJReXZZQh9zTctMe4ENdRv2CYzYDtqcc66oMmchyu48wdRMp7XdmfKbdD2wD3u3FExorEZrAcBefx8mmdN5XWv",
  "key26": "2KwwxdxjSY25W5T1KrSgFUMjDNb2deSg9eq3EuXTZsgeJavy22pBw3NhT6GZTbeaov7qqDGHwrgCo2E6wRZzzqxB",
  "key27": "5ByqHzM3Hz154EWnuEczkxTeri8747NqucFkdezgtdUfQ4xroj16TDmUUJNyLmcDKdgxpeLVG2f3G2nHdqXvLrNj",
  "key28": "2KQipcBhPaMNLmvjzMe3HssFGKaSnCiJoyhCq7Nzhm8GJ3h9BP7hGAVbFUpGnwQcKDJGdseLKRdVE7Z4uvDo7Pkm",
  "key29": "4C2etrqypGSt5EZVB6BfGWcfXy5h164qA8ZS2LX4F8R4ErnETNeQrRSxfWMPUPKXqUxTdTPM5tEoBA2V7zvcEJfN",
  "key30": "4x7UjSvvCe416KqwUJe3yjaH55H7qNHeDDUGfvV8txuG3Gx2zawJxAEj8jANAnVNN13jqqxhfhpH7N6grpfLkSN5"
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
