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
    "5HNpeGTN8bSfYCKBJCKAi5x9DbRSVBgEcvddWdFcx5pmFsSbZiiorgRmENxopF3JuesSv9Le6r6gP7e4f6ZL4gMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqAxApmduSUudTV3o4KMa26KQYDayb6D9dbikbAEYRA71LhahkKCQKhB9ALVqYd1sSJYjVUwZ2B2JGJry13nvNM",
  "key1": "641nVrawkjawZjn2rXqmUeeUh37de5xwm7BXCbPSKsEGxr5fXBEcWxZmiHwTDpfTifygTcKvPdTfPvTrWxELzNy1",
  "key2": "5PNNkwAJJ16bipPGRArbA3iHv3wjr1E7iPrrgHbNPTmVWkDxqAbJVFZx25QG3dxPgiKvwJy2mVFbp7wr6REf24WU",
  "key3": "2JNA8ZRV5zn1itQ9xFjaDR9VVwAP2HSSDZb7n7vXcYqS8nrqeRhGTJhPEoG1joAoiPYfuAesoamd4NrUFRJtNk8p",
  "key4": "oULrwCHKs14r4gpiYdNdz6MEmL78GnuMWg3zUHg54jVCxZDwiWV2AS7hoVR631nGRNFySw2dmh9VFbkUi9TdDYS",
  "key5": "4a8JuiNQFx8KCaMLubLLv4hBkpxa4SpTuGZ1qg6Z5NKHQqH9u9fg2CkDtcyQvnLELCGTBC5YQPAe8t4EL3uPJrBK",
  "key6": "3aovk5tDH6NHQVMNWgHcdPQpC9XZkDyvzrXtfCZzX6CmUC7e1cRAacVP3YwZ6AJ3yehVBbqeUz4p8npUMSEAHeUc",
  "key7": "33na7W74GYDXRNBtA3Y9rYdvPMppN42DAgF6KxWZQA6Eho6kaVtftEQkVWMHnNknxQhFXTfAe3Tbup8PniCowAGA",
  "key8": "5VAmK6zFoVLmmxnoDNTt7Hqs923VCd3RVpH135FTK5LAs4KV2CiwJ4SakgGmKXae2RL1aG1NeaE3diqpwgeoA3JD",
  "key9": "36HhzV9tP4yPfsAz4zScMqDsLYWWJotCu41YBzCF8wRHpHc1tX2eMHJUF98oB5LG17rkJs7pzJfE9kdyzZF2D7Wi",
  "key10": "38fQjK6dFpmzFV9tNrjPMWixbwYvgQfpnEE4ipo6tpt7B6n6aLTrZoPPK4nPEtySmZwsnAJBnJb3bVRgsuTEpzb2",
  "key11": "2Gq8GS3Jekqc2y4qEnVX926X1f8VxuwDKzv1J2JrMNtnjKDF9eYDgR1V42hbv33Kqg2wWtQy59rp6xx1LKHZetk3",
  "key12": "5dg86HWrnQX6QexWYsW69qBMMBSqVvqnPkHL15oRwopDS2xXk1vfpjf976qqABfLFoLgCaTj6grfHkvp2vyvNRqU",
  "key13": "4bgxmQd4L6hUQxa9YBM7aDVJmciBiFBaDAGv3TgKjBZeRKQ6wBipdte8VLCVcuGh5AXTHJLwuSyz4yAFedgXTseX",
  "key14": "4VDSaaTwVseFkeSupiK55NLf7QbLsBhfEqeQ79Nvf97CHisgS2uFKugbruREN4hfRAFKMNhATSvoX57iZkhrcuBN",
  "key15": "q1a3kfmnt9vR9WKGANYo75giRkwayQbohFGAYQQqfmKEJfTUPdhyWVNj2Cs8b56UW9ZNKDCCGhRvSS751amugok",
  "key16": "FyLwAcve6oG2UnYi93S65KAJoRavGBU1vhEbDmpxjD8AoWkDB61US9N4gaoWm1Mhkwv7i11sY51bVFgMjAz6KsU",
  "key17": "5BPo9aCFwqPhFyPfUmZ2baJE8Da3X1X2Mf5p4gVU7H26ZgqCapfEEZuF84JaWJo7oQck1cDgR5pwJveV1ohgzu8k",
  "key18": "5MGTAHoC8ehRsgcGedwDLcJc46jj9AaEZn1Lnbyt8J1gFjG8ziDddmC3jvpSF1rfhvjqEXDKhhvqCUihGJ8T33kS",
  "key19": "3KR3qHGDZcW34xiT1nFFzbViuEWLuKvCzoNuSLGCYqrVD3yRVQeXeD5dec9tP3t6etSvGch43ukTRvZdGP94dtcK",
  "key20": "4E4MwpEFbq3M1RfZzmoy7yY3D8RqVRjzYTtgEDLEdBJbYxCqxHUa8TqFev7AoaoL8A8J3U5eu6uz2BSiwARqRLit",
  "key21": "23TAy1BW4LfdkErkLYJ2Cq1ujHcy3Ri8nEqBajPb6NewDjG563hZcc61YTZnM3nXSkFZANZAXnytkJQK1wJBGJc1",
  "key22": "5DX1DB3ueaLUYzLHHjDKXbL53JWXrktRBdwFJ8bmLq9cqhsNsy51ENe5RcW9i8aMVYFEyXsVEp5DHhC7ufv7yDRx",
  "key23": "3nAwnC2dCyE1ccvo9TVEqw26JVBoWMoSukB9gHb3cTHfxAqcDvzaFE9FwBcTPziQefPWN9Tkcy8jQAG81ZZgZ1yS",
  "key24": "4xygz5SDJvjeovWV4GgfRFaggLA2sw2WpZKoP84MgKrZCGwm3e2s8pBDGA8QSCma3fwo7fLg1NnQhpRnwC9tFAxm",
  "key25": "388LvzMyHsokPPWEPKNejzN7vVe19Wx7mepqghqVP2bbAVV9dCkdqEpb2mQ2eZ3R9d25MpNZ74s2HAdf9JADwmjn",
  "key26": "3VivhMjD1N1qTf5nhqXJR4RK5unkP5bbG5iNt4JGtX5beRimgy9U6Taj6P7TEcgmLsaoUHNtQsZ8kDU1xK6b7nim",
  "key27": "5jBvWzL11bznR1D2qyCAw3GH34xh8iy2fB3WjBYe7huTePBmj4SD7CrQfx9srAsFjk8pDeH9DKFVvCbiGkTLnYT2",
  "key28": "3si5Lw4fpWnq4VuGwcboaj3NnhfUVK5MnNLD2fHHeLtT2x1yNBNGGrrGBeQWVTFxVbqNGuLq72mnGwt55TM57Kf3"
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
