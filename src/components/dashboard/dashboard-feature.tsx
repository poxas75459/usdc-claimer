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
    "4ezp9qpGLPconNY3JQ25WPhW5pM2Dfa3nq4QRdnKRWPg1PeAdA9kzq4QaC76H5irwLj6rzx1ryjUcpbMP7YZVZ6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNvpJK764Zd1eD7H7amrFmNhuTEETQMtyTbB2Qd3ySuGfPY2X3z84GbJb34JPcBJTXCqPKPau6feHWrQ71751n7",
  "key1": "4DWB7ndJBdESAQSCUGJ2Nu7rRrPrxUe1j76JN3AmY8gyoBe1YFtWwUwywdXJNmY7ytvFfymLBnHpPJvAaXJRqBYi",
  "key2": "5kKUpBSbsQ9CrpcZLYADxkLhoSDm3dMTQJoUkDCU4NxqWNGhZhLnyNoMfv6Hd5v6UYGaPEqeNmH1mMRBc3uY2kc",
  "key3": "2nNoFrA6dYD1KFztuEWnPsqEPn9PqSNH5Nfknu7tsyjftaWHGagDDRb7mJjEcMqK3C3MUys7p7Zcf2ictzkZEzAj",
  "key4": "UKiJzeTC8ueuRBphMz49exsb6MLamn76Ag9XmekPzCGRP7wbZn3BcQE6rqb9a3bk3PqAbqnxD2htZLCjWTz1n8b",
  "key5": "62hL2xP4ErmUvWTeZLjeY5oSUHd48Ssfdm3cQGSmcXPbvnWBbVju4oJWPAqU8BMvKxvmrj3FGnLzvtdCW3DYb6JN",
  "key6": "38YqA3g66VSsZrK654Jq1vWufugqMuppugemjyRroj58kvb6p2XVpUjZviUJLEnSmjnJ1danLxZkErszYtrwj3Ph",
  "key7": "3xCjCSzUx7QyGJFuLtzyWUcv8J3WKmWyv6cqGmeWsmybDSDrG2nQEXGBD9qSkvaRFoqYQmkie9VT4MssBQY1SVDd",
  "key8": "4siH2HnuGWexDFPRRPGf7Es1jZdU2dXvGpYBfgKFHFM4KPagyJyD3SnbBUgnfi2FHjyEQYdiUoNE5yDRwvEymoam",
  "key9": "5mz1wXuPL6tJ4iwWY8m1cFSGjgfdZyMxmfDq6aMrMwiuruzPVQQfupUNFZdNaQZZZF8TpTh7YUt8WbeB58ecRc2e",
  "key10": "8S8v6tpWq3NnHgVA3sGNLRxuu9SDGjwzUNHPrNtKdUjBNRbYKBUFcwgw7wQFhXCbbazhGXVw6mMrCfu1VrvRood",
  "key11": "24MgrmjFtKTAFb5M7JmUTEWhw7E3XwJenduSTwMzQyvJNJYzuqMoYfDWn5eaCogg5fxzKeSEw8cS1mPFVokrAQDA",
  "key12": "5LbVocctBPxpgjiFsUapSzcrgahJrEYtMWPuRsssZM6rp2Nib4U7L2JaQa4qSZGXXGidPRmTGaU9eTWyyVkioP6H",
  "key13": "bKNc7evNZ7ACdopzTveCZrKLZZRuYkn6wzQesJwJvfxpnnWEfeBKPgunoqVhebq8e6VJWEeaUvBZ6SuW357tX7U",
  "key14": "3sks9smJH7GggzTnr1e3moW5u7cUtDWgXvwnxdPTmSNGZ3BcUS1Rrr1R2bhiqdiGVicvYU9Xgg6iR4dS87tLJXPE",
  "key15": "31sy8Nw36YnmBYs8naKmBRknKbPpaBxMKU3jhUhfaSLuqZNvRqDoK52zgRhFdfMfMEtiytSjmfRe8EixoQBAB2Y1",
  "key16": "3u6emom9kdsffHpigGCaLa1tA2B7TtsB5BfBDArQWeCythyZgJ2m9AqH6NouoEXheaPvwxY88x68zagFg9Z8X3sa",
  "key17": "3i8jWVpNgy9eAucQukTxyxBsY8n51Rwa83W1jZEVzAVcAHfgTNhGxRG8L5FL9xQz6hfPHkJ9bwZAfq8pZWxu7tzw",
  "key18": "434WG7TBGKWnoCXj6EZBV3iE9pa9oDNWrPhAXyJ7mMFAdhdi3MKwtGqgtb1k9ML2vKbn8mCkyV2Gqv4Pes8b3Ntq",
  "key19": "3ouD8CoFHDbMNqoXPN8HW6LohGBKAFThhoNdiuiffDZ86JuSpjC16T4mBEEBRcUVg9LRciqKdtZkBMbbjY5tUvMK",
  "key20": "55z1msyCz3Vy65nXV1aEd2syZywM91sJei1tpFzFzkJJeoXoD17kFoJJ5ELwrEiSQEqFQggLuX8XG5DDXh3WrZGM",
  "key21": "3NCsbfNLy16xEF7oQohny7ydWH5BMfZ4bMZhk3mcijWknwxzapX7ue31gSFg67k6wgitVRn1JBvMJNPAvFo2Byg1",
  "key22": "4iiyivYkNU4j2krnmEjiPcXYNxSxgQoYakEtDGdCNYAXbSUrxj2ngjyAj1iDz7BktGJaKDQb2Ao6b67Rdemf8n3K",
  "key23": "5ieJvDfudTwtVkn9QbFy3u3vKYJJeENSbA4ZhmfEDqXBsoB63B8UM3PeHY8fRHDB94ZZMW1PrKYXVWYkDzsA7U8q",
  "key24": "CXdGcm86cehpWXpmz1i2PvK7urPYHjVzcBcph1JpQzdSyNx18PXqEVzsQuWoWWuQJM1EDa5mXAHnSSv3XyJAyBJ",
  "key25": "SMVrFWxqrSzpX2vWb53tpLeo9gV4M7CMjfSM8WP1L2gferGojZFvY61xd1PaqkSnn53FGo35MFYxArHUdcubqJ1",
  "key26": "4qbPX6nx2dSe92oq5Hp5YjuF4pvQonTdt9Hcdpya4pbFrnWEJTHJSikjApTtZKUnVmTQNLkJuSR5wZWAhTE9JuAG",
  "key27": "2me2Q8n2EkzdJe1mKY5AsyaM5r8xnvJBiV3SRTyxFsEPQ5Q7mMjD5vhxEGARceJPS9H1anNz3yh3ximL3cpr9FsQ",
  "key28": "63V9GW6vvTgHAXrJ9fCCuBA7Y2Y8hv88kJcnb5o8TDhxNMahBDB8iDhphJfvNrkCNoVxf9j9ZUKtWM4dF14LNVng",
  "key29": "3EcLZxCcCxqpDgWQDDWaJgLZUjLYWwc2tdni4WCTszksJ2feseQzftKvvu9YhD17fC2MDpdZRGx8cpQ1fsFbUsuf",
  "key30": "4CyA1uyqVxQV3Csx34bcJBFSb8EKut1g7A6UgQbH3dVch5vq4wN6aohxgp3JRkbbWbcJZHAYYAPkG24YjenM1Meb",
  "key31": "4hVrN7kAEraZ1Ff5DNoFKi5tXKWR5rocYjPFvaGJsofEPcnLnspJv5eJHNP5Qd9GLR5GVwdJHraqrGW3i2eefpfG",
  "key32": "33sh9f6TpZ33CJY5vwfdEJo2TTRGWygBL1J7Rn2xUHXmCEe23dSvtWVJYvLgiFThvZU6cgpGspSE6mfPSWhtvjZG",
  "key33": "2pSaSdxGVAfy8N4sUsSQsc4n5pge3wVzJjvVv154FEfn22hN2EKR1ft7UPnGVavSqhiUUA867UG9p463pvy7JHYW",
  "key34": "2ZnZYoeRiwSrjRREKAuUydQrBDbcxXSYVZgCPtiR9qBYMqaf1EQq5VJYcBJRiuJNDnJxuLZNjBoMofksRSGiJfuR",
  "key35": "3uq9E7UTNXfx6friiunWLUZ6QaiWhrbxDsAgSC9WNmNT1HtXJXK8X7JQSauFF1ER8pw71FyBRnKq5Q7x9cbr5jx9",
  "key36": "4jwEdJEaeNGGZMk7d3u93bQYEytzRvLC7tJ1vCLKgCteTCGqVC1LCyWu5Bzm9eEXYjG5uWWTgUg5sekbazM1wwoN",
  "key37": "2VP7MNhyW5XZLGqMzb183vo5oR2aYfFdx4dpdHWTkissrqs192cg4B78MC2Y9zXbjZGbnnTTPRequArCLjCZJ5am",
  "key38": "23SUkwjFqi8c1kptX33MnChL13zmpC1kZJaSas6pEb2BJmJ99RNuvtV3PxeW8qqcoT31qLmeeTQ6hRUjHBoH5tMd",
  "key39": "28M9kEaisLLaxmNaDtWz9fFMTnXcsVHmc39gVCWUCp8JWVpUJi3NfGYJj86bsVeTQy71uAQM3AdL6ohWpmGuSjjJ",
  "key40": "3fWkk9tGxS5wonsdEB2aXSiW3KWNAZP1eyMqvaxXoAuNgeYf1dSNdES4ELjyCYq7Qa8T8PEt6tfewCeM2QY94YZw",
  "key41": "4BFZ7LjuBFCYZSkxVE4iNKSXd5LYaBQENhBfG4xwPk4Jve2bgL15oCpHoVZsS4CUnpJ4491KPUFM8g7DnaVMKhrn",
  "key42": "2vUit7yMorrHFrW4y2rhTeKmE1xokYkrF9bjAeqiWDfZQKe2otRpJVBbrmhXfHqAMqtj8e48da21sj4ENkDUtRRa",
  "key43": "2uWVxbKxURFVzTzAXfU2KeB4dRf8myYiZdh7YWBo2N4HUG7RPndqxgKZzpCBoV5HEkJWpVv7HaWyQhvxJFwr3M2B",
  "key44": "qxvFu6Zx6ecAbAnoEAyhcjSYKGtp9ZtnhnzA9JgZHuP1ZbmD2sHfwLKCxKysobLYovJV8EjxUN7cjJYh1Z5H8qF",
  "key45": "Dp2GGc4f4ytvc5n6m4mPX7xEuY8Sp1NwysTEvtGsBj1fxhMoj4UDjdGaAGPQr2bn8fwe9LDKMxzDBUT4BEXDKVZ",
  "key46": "2dGn7h73kGAkfMYLLkm5YaHirFPnN666PkSxbY3m2KqW751tpapdtvN4uZGHP6r18VhsdRxxC2mE9DxwiGRanA4j",
  "key47": "5AG4pKjRnUeCSNaytENErY5MKSEvjjkDUdEC39VHmvuS8BEoSvs8CAohcTrZFzHjDXvcdHv3qLDDV6HhoUN4b3fs",
  "key48": "3r31zcYHjNxasuETeqwYSWqvCPh69naHUXUg5yhAcdpLNSGt9ZR7qN85sqD1ooY1LECFqoSsMXFFFxy65V4bNwY9"
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
