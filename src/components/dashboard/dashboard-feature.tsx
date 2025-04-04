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
    "57NAsXnUe9ZZd8v1zsUoC4DGzs9VzXU9YSwVJHdAnQZi3SXD2cpismeXeaMjgGWLE3xpf1JEA4KwcXgK9ve8f6BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ow5sgztFtYG2HHroZSDZrom6TE9Gh8SC15XhzikXrcbZDXejwmqRUG9JrQjoEb2Aj182hLi2FwNTXYMDNT6xjFV",
  "key1": "musoRAgFfkn1wAxrr2AHXtLgmi2bUm5VgVJivUMDpG3e5yiJaFPfxB6yijGu8yY5ZvJg8rToYF6npY1Xg88e7NW",
  "key2": "39ZkYsAtXgLnYFsHat7kf5yUvXrB3EfdqAfcQXGAmavz8knbnWidEgmuhofGTYrZAH7wokv5W7xcrnL4UCKCz7xR",
  "key3": "5LBhigtdYK92tG1ejhhC83hPF1jcLxWekNb1EUps89mUy21BgHirZxpC6SsSXkoAyVsF1oiqT52oV9aDv1gqi2sr",
  "key4": "229Fr3ENrgwB9yaozPG2CD7NDTDmDfxmRLdip11HqHVsipCEomu9MsofyLp8DMKQBHQzDKZ4YzAWBaQv3bDQVnEP",
  "key5": "4jjBKhR1hanYWCXxXD69pZ1P4oCRJ2kojQdSqSbWX4Ltm1Hmfmd2Ys7m62Ws5G78NUFwkqJjoGfafxi4Y3c2EiXP",
  "key6": "5Xbbk9SrPn7Ci2MEKqrnX7KtAMRo4unSjP1cAa9n39PijjjQ5XfhjtsJqUo8yFHxyvxSLnM4JW4zcXqBq3Exc9mo",
  "key7": "4DHbScoGz4XgAMQgCpQtQRWCmhnzkriKH9sqC9xyqsGHBo4jnaPieP2cQm548pyhDUPzGqddafXEKX2G5be1xUAs",
  "key8": "2dwbJmMB7YAGvEwX9nvCmB6ZYYXvQJBGQscS8KGVKbkNdUDSUNMdsgPdvSp7gtCFovzszxAbj5awnECnEHHptU2T",
  "key9": "431CynSVu6xGuPWy7iQvoAPxCYjERb9udyqnpnekD3cjXigoJiNax88M8rx7Ruzno5eSzGmpzvnzEuVmRVqxc4Zv",
  "key10": "4HVtQrZ7Y1SxsNFqtfRviXRKrWSgbPe33tCtrkztegRXXZsF7wcKgXZUWcLKar9BMb1qsUfEW7HTzgBqUnkfKAUX",
  "key11": "5cgnSMq2saQbwwnFR3Awhk2fJYjpCeMSKvp1uAWfwwRvUn1T2sgtpp9wxGsCKu9DPJQypKozSQLz23bWgXrvsdje",
  "key12": "4LuTbk3iFDjMdt5pUkcSYL3Lt5FTPHT37WVqfPbDbvxpsCTW6xGjkn1HmV9QiKpMj5cYKYJw1q657dY6SwANQg8h",
  "key13": "2Gyr1JubmpE4GamEH5LnxXmhpiYtfdTN1xEQw1MVnjduMHZ9uBw4s1oyswTWbasNkvCurB6f4NB3zLAYayjvtQh6",
  "key14": "sezC3yXU11WWjXSJpAgg6izBaLtaUAMjdd3biJrUxA2kRDUeeYfKD9zcQmEDr7GndEiFMJ1kXWbGmBXDUyztWjQ",
  "key15": "2ys3aQ89FdzJ3ydZH9TnieRWKXJJzB5FBsBEpkeqjMkjiS5JHPU7zRuonsdL4Jis1S23VnxmXTBpEXCr1f8iyrt8",
  "key16": "aFJxBd3VMcme5gBq3NLrGXkCLq1VdEuiGPdJGCE8u7nR7cY7W9rHPei5oyfFRw4mSHnKw3sWaiWKs6x1ageARfJ",
  "key17": "36SmWHQx5utdyp7b1M6oHws7YoxWzPe9BmKeZcgcNSTvcGKTz2eiT91aK8cLjdgS6iVFXNQj5b3Kwo5Bzq5sxPDS",
  "key18": "34GjrfsEEJj4pBvKrx58mJKLZLuHqSUJsPLV2c8yAMKwQqpWM4fdCBgmcNzf9pwHKvXGCdhaL6pAGLSv8r8k74hT",
  "key19": "KaLEG7RGSnQLLPYYeAdonHzXbHrBQiq1vxgEuoXP1dzMZN8nXDzptumsvpH7XV75XBMfY44Kka9Hq2UPUQx6rRB",
  "key20": "4LCEdRicyA5k1PkNxrSWGVsze8MMXDWJRWdevzZE2jYpyxavQc4jr4qMcUNNNcwKwLmqF8AwVqn5ocKTkqJXMHKw",
  "key21": "J5RL4Ei5zCviebgiu9qQgJMC8rPFKsibhm5LEwyEn1RCTtdjKoNcYYhVD4WduEBMsg3sqtcd8SsxzQK8CHQz8wh",
  "key22": "4FNvv7QcrHWCep1Shw4xgj1ee9qchVp5bHgE1suC6Xshrj91Q3xZav7e17edy3qg5twVBRbcL5fhw5xBzdZJAdcK",
  "key23": "2LtUsc4rbJWmGN1bmZgwDpvWsNLvkNCN8ArMQ5Zwn4gq9KRkD9Wf6KHq7ojtW4VsJmJs6ntx8vy4Mc35iXy61Tmt",
  "key24": "3Ft6AkG7zewJb5vWg6ADbUuGkZqUu8FPGvGqiHF396kwfTgD2ca9mbev14TfBEmquR1zD3Sjp3zDeeVAyyGGAQrE",
  "key25": "4VnXrqbsaDt7FQqTHmk13y249YbgyU7tWX3EgV1k8RcZUzF2yVxzreRejkr2SfR8Rz3atB4SjKUcFcUn5pfDRGbR",
  "key26": "5fS5bCfJ2ofHauRPdf6SkUhgjz64uVhUVhKQuEnpvFD9PW9AYKpRpcBz3YMK3L6YWUAUJvSjXW6LtV64A7xZvpAC",
  "key27": "4ZiAaqjHEY2q6Gwbgwhp8F96gBemRBsBs9MJB9cRhZoZq6719DPNauvR2rrU8vaf6abYVph99ej3Kf7DiqURWARQ",
  "key28": "3PWw9DCBW6E7FpsdHRn8HdV7qhnWLHCrQP8Us5uReSoTGECqXhUj4pL6DDyeu5ytPsubMUdvn9DcANTrVBUnPwr9",
  "key29": "GcVzERVaMEo2VyZzc7MJeLG7Z4fCN2jQpVM4e64US5sy9nB44mD4BHZvmCkMaWGtUKZPQAfUjryTx2dQhCgYn5s",
  "key30": "2o4KDY1VkqorGubcqijBhg1hXuQyc6Bz4dGUkpZpFHniPnNQyFqSn13wjPV2XRi9ZQBMB1hmZnnzHo1eSDTeAJBX",
  "key31": "5UcDhrrHp6Gny5MhcPJUrdvSZJGu6y855NMHuT7tcgcCCicLcNN5o2AriNuhgT8uCZbFh2ySrpwakKn5jA8wShMR",
  "key32": "4KY5hgQdZQk6fXY45b6JTBEymThLhAgwnETfjamAiM17mjqwqQgygPL973g4RGM6Gmg8rx9xFz3YsGMJZv7ekhWk",
  "key33": "3wHfmBYiDA9vAXnUod5GJzzSF2M9eMbVoT6auuVx79oYXd17HNTurp8egwMuaJTYexL2x7YmEkdTNZN8T7crwA9M",
  "key34": "3kK1RgDE2p5xceczmk3EnD7NRcp6FxUaKJQSSpLEpqy7tbb4coab7P6eVo3rA67NtPYdjFXvHBBfzVBMBcrNKWLd"
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
