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
    "5T3y7pWJPbnFPyGWTBTT1Vk6M7wd2qpHbAMH6ZGydbgBgu9sSh4bmGP4fX5eXQstJPN2beDn9zTBGH1HcPgPHANw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zciVuzhpJjCu5uT2TTAXNvEYPBs3h8t6tRjGtx8Ztp4vdTK1TGRKN7WQiC45zGVfTGuA99ohgizURgn2gk73imf",
  "key1": "2sa69s5CEUqdKRW9fRy2JR72iP1jTmFiyb2cXVd7BgDXcjCSf18RRYSSqBKNucbYvDPwDhLtFSALUFtXUVb3VDPr",
  "key2": "43unQw99h1LyapPjXYxcmZvjrm9MU1Ycn8qcY2TAd16RxmbpezbRGDSXxAL9gXWLSQExkqroiFMNFWAGKJzuZ1cf",
  "key3": "9M7iBBxvPL18Yq2rpEX339ahNDypzjqQrwTZCVTGj7sCMoe3QcVophRw7R5HD4dEpa7LDNcTruoVX4dQ3JGyyZt",
  "key4": "2AnNuGUUDHP8wTHZ7AQk1Z1XRuBsaQSRLdZY7qaCtPQqG8Cg2g5JPzjBVVgZvHxD5UHGkYhgan59hpufs4J81Mpi",
  "key5": "5ycVz1vtR4r3Tfre3cWGD6wkgbToR1DYs4T7yy84ARYJs1gJ6rmEt7pnktLAp1v2nTigj3TYW3LjWKxRukMSvS4Y",
  "key6": "JYMzGjXEoRcWBLxdTtAMFyn5VBxPfQpzX2YbYfdcDh1ZoHqcWuYhofwoA1htnzhEDYFrdvFgRtFFMCHs8yukywq",
  "key7": "43WTjJH5W8mkRS1JWYLQkmeGutiXth2HN6tb68SBcPNySyaiYVC8PsruFp6s79HvMbJeacmNZNDGHXE6KWS2EfxW",
  "key8": "3SoH7a3G2doEiTj8c33n19LfUjyzuUZxyhEgkYmzMAZ8c13yqoHYKkmdFYsURAFDdPsj9Ge6tdNFuqHHZcJHkTqR",
  "key9": "4ppXpkMnKFgb8d6cEz1LgHMeyDZZcBDeEqoPj7WywFZ1PYEqMTNz6UA3HEN2HmGe886yM1odVHJMtRoPyViKSgo9",
  "key10": "5XpFPxpsFLZXm5du6nd3Mse2xqKucbJasKqLjsCpogaNFTqGE9J29mudczYdfAsrdVfrLi1zHVSjRa1CkxiE5WAC",
  "key11": "jGk7EtiqH1VKmUjYdep3rhbuw63CujbK6GedvZ5y7yHZYYvqFZBAnjvhNHtcJSZzBopHXjKEtyr5RhtTozpZA97",
  "key12": "4exqiJeYgnjzLPJVhXqTTVqkxLt1iPhQpX3WerUtFrhjiWnFV25kPdg63ixcjtYHvfNvpfBF63wkZzHS5AcNF7o6",
  "key13": "464boTEAKDEyuntionUXKxLfdEWvZSrZEfqZbyVJ5qxmpSPRqJ6SuQFD4kzfoNuBg7D51HZxc6ejHSeKUUYohvKi",
  "key14": "3AA1d9Ki48nix1UEsvc9JXuQWQu5syxWTVuMtyJmVGAoUFZtR1173kchcBUtNGwXeQ8tYJjXae1MsHy4p9MyTtAP",
  "key15": "548U7huDgYw7LUAh3YQqW68niBtYUBVrTk7ojWVZTPtnobTbEtWebLi9a88Jc41ThfYa16dTg8VYNnz664FLVbLM",
  "key16": "3RD7ETYNxppgrwDxndTgB1gf3i8sxkmZDBJXqvPr47o3QNLcZzMYtkZD4SK1ZmC6sSYVmstdznCCch6ALWdMqW7H",
  "key17": "Qyq2d4GZnD2iGoeS7XzS1ikLMsnT27HZYnaEqS5ZP3xWZqdRUCpSxNdqkoHbhycgmC6nPzGSSBUjmNgRBXPHyuU",
  "key18": "2oZYJwEJYWo2TFHH97a2UatYGzpp2LZ6jmnLxWPcsMJJRrtUE2NziwjZMzZN86yvfhhszjMYwkc2uAPUVpK6ArnP",
  "key19": "2rqD6RAFu6wLQXSUQFtMjMQBDvrJppDC5rAe9ak4L7yGq282ZMyiga7vL2ijsMhGBUCEEn1xoH3ozY1PQnLjudce",
  "key20": "5YWMtsonk3EKJaVRJAyUEvp829kCzzJxTZUnErwrn68sLLAj7HrgfMq4714hjzoiAxc4aYb8X33zvZvqBwxriaZn",
  "key21": "BjmM7frJX8s25shrMP9KUvpw1JkwHbSj7FYmZ5WJNinsYDnD2KUeYonDyfhyNPQwbGL6ppXdHuDmGY5D1SJRreK",
  "key22": "4ArFP8jALePwcZwNgoiYULdXWxtJrKZa2qdwtumxuwHPAqKJbqHg5dbnLxXG89Q1uihVpiR7hg54Bmorzzs3C3EN",
  "key23": "22hQmigmak4xJzG7i6QDQ4ZAHUY2B5ehCexT8wevcjXFjwn2HJMeypRSM9DwbjgSsED9WStLsbs3rTqBGiLkaKrS",
  "key24": "8MHUHzLJkwFTb9cJumeaoHSbmnLY1UfxWdcWAxxYHWGRkQjM1wGHUQ4zHfHELcpUhqoxSQikZPHi3gVPBVTscFN",
  "key25": "5TdscQkMu6hGCQHvSAFc7D4rCnM3JKRPcCHkutG3MK1RkRomy2CYWVX8cb2cBMkFptzuR2FMN7st2nLMgwzqU7FR",
  "key26": "4zJBy6zjN7C6ZMhsmL4i9hUEymHjpex2Q5zMNkwBnw9PWGLmAQjhgBJRt7wZ1hCXDmspdVNzHt96cv11PwQcAyKk",
  "key27": "2FBoD6McGA7JzTr39uhrMstT5751n3e3oW7NEYNWmCA1EWJEu1LV2Vm18pdCa7FaHRzeuiXcokfNMNJs6BF2h4nU",
  "key28": "5mWDknKqJ2Cgj43ZFqQfYRNLAah81Lv98N1ES6YHSDtKFy6aTeFj1NN1EZnsfCLxA7ar87dvMShujvMegkFwFxZT",
  "key29": "oV4vompLSn2ShWSivpiJyvkrgoPokAhgw6wzZt4Fw71m3eDUeJMS6PMQp9N2fZ4DaHcqk63vxvxi2SfGGgQmWmo",
  "key30": "2rX2HEbthQZDhNQhS9p2BwdZ2m6eJsy7m33x7k3HJqnYBhNpGY98AveLE7NW2C12zYh7L78rZK4R1domjyLExTP7",
  "key31": "Vgm8GtBpudovgGQtq43MZjKYAsoEdt9izLmwBTof4tJWqFwdSiKbuZiyfSq34oWAHkt9wt4iQVtaYsxQ88pqRcC",
  "key32": "2bjJZ9U2NW9kXWMES97RyMyvrJ4Bjc824Yz3gYFFxkjXvdxTumKfbCQJCw7HcaJMuhwPD7AHRo4koiPh2GdU8RZ2",
  "key33": "4NpVgHqUwKC6BKA8ipSfpnZu6aWxhj3fgPLWgJcqxDRJ9EnBbEccnFFtXC9Wy27yZgvW1NjUghkdLiY2aD7HQczH",
  "key34": "4eYP3e1zQzZALHSYdDf98BCHQK2ixCCK39cRmkqGwCLzLRNbs3VUraVSfaAUahJVtcWEmg8PH6YXC1YN18LLBs26",
  "key35": "HpVaVRr4PMeBzcyxbi4qGLzSo1BgbgWoyAsbafMaQfmi56RLQ4qskgQEpfgo8iXwv89khhWCx3npuoYsdQbKD6g",
  "key36": "3G2MiLY5tGewnsUFcd9sDVbVyayoL9RydVw9ZnZxWJDk75gYScJnaLLANu2rNjivcNGtxMyYJwY5AcFhYuAWvuxZ",
  "key37": "23HUeEoWKj5zGh9LbsyjNR7rxxAyJvSTMXxw4MJUrVMYRViJqMZj2cZt9uihueQoa1rzTDSXDPbQqxMRaXZZMvvS",
  "key38": "3mL7vTkmsmKMDePHRfbSdsg4jBP1oEHF4aNsAvjHj6RMj2bkKtUY51SgD9jfKAq385hea24DmN9D2vKqoKTefo9C",
  "key39": "486u8z6drvqDVbsHBDKCib3WHWDe3ERK8ACW58MHgDrY64mYrSFmpfpUPdXBfFceWR2hJCqd9ChJzduA9o8g9RCW",
  "key40": "43Ae9TgghM8yWVAvcgxVHBiNzvgxhbN8USgk6XuEwjmcdxVdgDEAqbY38ZeZddGSvJGbHHzJH915nQqFEt43F3Ff",
  "key41": "3xShgdWPJhuWDvuRn74b6YKfU8CG2zvqxfPVSbHTwEj1pNhPA8qRX33mQuzJaYKwM8YiNZGjeToGPB14phrstpSn",
  "key42": "8wJkwVr9vB6MhFRRetyEsFiRDW6rmeWuYUrWYXuJ51p9kDDdzrV7bf6NKERRJ4HNAHmv8CHkHdUYpKcfMwkdhy3",
  "key43": "2KoBedf2iY5dZvWS2wpDwnS8tZowfXqa532Nu8gUtkR72JNxRthHbFLDacVQnhLJATqy681qAtNaKy9mdFS9Yxhw",
  "key44": "h2FHkGqmRhRCK1E8dbM6TY9dPN1PbNm4NAmcQRp3vbMw7iBVXQxhNdj3XfviuybbwnzzNcoEUG3485CajJpqiFn",
  "key45": "41WTbMsKudA2Pd5JBFth6Noo7ma7zDYfGfGPQocBTcWMA4W3WWgXjPouyWyWXmbkSnLEeXqkEaGdnyKhiRZz2Dpb",
  "key46": "XyfPex1CPDvVZVcEkNPof1kdz8eHTdy1MYHr42nA9s97xEcm2VffUVVoDMugTRBKP8ynU6W2RTr8KC4jkpPySJR"
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
