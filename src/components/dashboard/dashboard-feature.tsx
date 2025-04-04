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
    "3gczz5sbewSFHERvYFF8AxFm8GeSH1AC4Pd1Qpkhwoo3Z5LXAg4SNtnGyAMJk6KugTeb91wCvFjqpCxrU1L75hvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCYkch6e4VdDTadD2TquideCNm2FhAMC6e9V27xL6U9atKNY5QeC6337xK6UyD4QU5s3BuyP2w3pKpd2ANUJYDc",
  "key1": "2cpXNS6CLMYuPv3Wqh9mBBfHf7LLvwDYXnx2dHz91N66xNaDTvjM15ciT5r1UkUzP5t6vAU2ex6TbtoMBq427QaT",
  "key2": "457VZJnQdbmRxRpf79qFJBAyP3YwxYrh6eCRU2YKPL6ww4dAcv9wNrtcX6AN4Eekmi6CXXn2LPhRiKK7uypPENWM",
  "key3": "u3zqzA9N6cC5et9KWSCGsgJuTbUG1YVTSeN2iamReFHdFqkuTESE9GFYnixVHF1jXBsbhr48x7qz3r973Vipmwb",
  "key4": "3b1e9FLpG96DCujwDaEJ6mfSmRZTT4Fu8cvuCFYErKtCWFWLjV2JdLYL3gmeqY2vTRetXbSv86YNY7GHbGvcQM6T",
  "key5": "554RxoYphCD5qLiJPFFFQFG5GJhbVSeWp37FUitbCHBJtyY27RgGBscgZudQ2rXATtm36JtZZNZZsGeisWCzuBem",
  "key6": "cgWtMow3d9s9wJVhskMYTEfQMn2fsZZu88GutqT7LZDEvb8NSH9J7tj3ufiGK4a6Gr5QgYhaMf7gkGzRJiSSMu2",
  "key7": "4MuZngnCFDMh7y3zGJWJ1kaMPHNrmPvvbXaz3xfaRgBCzBX5gHA32u3BvJFkR3yVH5zV7DUCaFqXUF4Arf8DR24B",
  "key8": "3W6YyfE5DP9A11pqzym1UZ7NrNqP9WLYfoRXX8RjyXYfaq59rKTKx3WuZ6nLgBHvg1N4cpb1M5gBU17RuaUVdqjG",
  "key9": "33c2Yazt3u5jhtUwCoxuHYJvcSZqy2kQ849jWsLXKB8VfjbDSS6GRDtrKGW83VZFQNPr7rBLo9ziEQYkw2TZFgdU",
  "key10": "4WRss2EajxRKjTa9mfoUSwJXXKwwSkcxDrQyRAXpm9u8pgVjrhXn3D9E5k5eVwFah4dk9q5Q5MBs3XB9gKQUcyfC",
  "key11": "2mhZobAAY5raLghd2k1GK47wsr2ZWS7FbvNJaoJrgvUwcb2Zq1vWriEp5qAMeqW1wMntHr3UKujj1y3pewhgoDLh",
  "key12": "67d5pAn3bVagv3T4df8AiLoDZ7oDPTSHqh9ZUNDFhYda818Lo9n1iiJtWMipW7jmrK1MSm3fm4qkpXYPEGrNgLQM",
  "key13": "472Uour7SMX1osjofEPdRdKfk1bSyYY5iZHzeWwnBqEimacqCBApixs4VCDtpmmF159yaReuWtn2YKiJVSQzLfjL",
  "key14": "4F46KQwWhs8Ucp89jJhuYZT8SZHSgPizkkwwA4yRmZ7DodMgBEYYxRvEGc3FoDAXuqfY8Pn4tWj9tk1Aj6fzL2PD",
  "key15": "3iNaeYDvAAkFamJJcMzngBG8WbmKaQTvjpW28vVbc5ikf8zgPbMGPEe8gdEA9kjFjKqj7V6YRFmi3dKvmiAR4i7D",
  "key16": "5ftufhvxbje4WUp6rkV7RdgTzLcn2oEqN9XH9BzFWFFHAyEAWa5FAFQYxjaFNWdYKvQ8BBzkEfZJ5cFBwsVFTQVr",
  "key17": "4VdDzaJzBtyjTT82WQpwFxfZoP6qj7djhDSxRYRxduxMhxmATGvsZZVuxDeNJ4t3YBuELTzQW5VShSGUPJLGHkmZ",
  "key18": "3dZMrourRamE6AiFSY83FP7XfbkZpG27vFADW4hQrQvoPG5yWd7kAn6aMfx4iq5MrExvjCDky2a66Dp88uBptvZQ",
  "key19": "5GnXgVo1bLnchZpCnCEng2BYKXsvhcxRy5k1pCXQHxhN862RwXsPq9R3DDKV6VmCrTPctDmQmYAfrwxCDZK34jMd",
  "key20": "2SLeobrYTcCZ92D4cGXfTnbmgNctmrxCu9pnMB6tFvRdkR1eVuEavEzdUDop4dxujTDWWfYGqipdMkEFaT4YdTpp",
  "key21": "5ZZwoeRZzJzd9CtT3XDUnzgHCGVEbsPWZMsKZiTedraHY26gvM5Ucc1bD3TTeh3gyq8YNq42baXVk7GHQxsKR1Uf",
  "key22": "z9Dm8RFXr9vpDdcseXtvE9oUShVgXBuLEeP8Jpqhp2g9SAAs5eRvPh72ydmE8L7rZV9gv6tEjf41KJkTCQzxstr",
  "key23": "46NyKdGScyjQFqDtv6Z4nK6mb9YhWkUBdKZDFdBnuuyeCafpTBssX4VNfKUUHuiFY8oKV2P44anPqjQkkaxjhMwY",
  "key24": "34htSkGnPXddiR9PTGi8LHvBbJrP5uatENWCzq39ALMpqGkpvqbyGYAdTq39UzpdMoHHfFJdKrastbyXkdHEHgaQ",
  "key25": "3GfeJ3GWE7ASoVTBWesg6kdASGBPygTvVT4Pa14kJ7VmAM6zZY1oaZKnf2uuwS412VndoZxZfDsrRqYdtrBo4MZr",
  "key26": "3QosCuu3z3RsFyGGx78jXrgMuUxBcEqPX1G1rcXyx81hZcaecm22xQKBDmBXqRxSmGXp3t6udCRB5W5NTqpNn2Uu",
  "key27": "31HBxZQCC1E12nvAiRFgViAKYBMW8vzuZpZPDY1CvfHnHiBoR7b1Mj9CosUxidAne3cBxLJE9ozLEeU3QwV2WRhH",
  "key28": "iucUjbqD3MrSUfFVpaoCwedywppSH9GfuHyK9Jwu54r151j7rNwNUBtsVrusaT8MsFiTUkc6JEhfdca9KnPL9Fn",
  "key29": "2w5pZVE56Xw6wW7ZLTADkhwDQ993q7NFn6hWGRDKTZTfHKFteEZZegLN5Ha6diQeaDcA1EeFrGSNGc4PjPbbHgKH",
  "key30": "3xXFnWfJdQkhShafRxHC7U2a5Z3hFLJaN3a5iKineoYYDkJB7eCFiPKmk8dEo5FZ6M2y51syderWRspniH17GfRW",
  "key31": "HZKzgP7b2ZUnf2GfBxLBFRgJe8CyxzNqJ1Htjt167tgGv483qksKtgr5dUFb939YPNBNNpjoX8Lq5J2BDwKp3zz",
  "key32": "iBWpYc8t7mTDtWMApJfCYnZ2Hwr9fnk6S2vuGxDhLSnPJ76MzJPiQTdWBMdoC7gonyztgcAy4tKPqEFngECeofb",
  "key33": "5EJ1kEHVZLCPj8ZLri8MrKdeCTgWSLeZU2G4bhpXE7j8DxqqAsZ7MAJCyp191LhyHaVXaVz4srMdyNBEDbkecGR2",
  "key34": "2Grifq853ZzCxxP66ZZyKvCByQauU6MoL5bsGwPzwgyktL4H4arvbzE6zqWKvC6g2iGgfmihuboaAV18u5SZfPJq",
  "key35": "Towi6qzY3HU3CzDdTTCgcMxAoc3ov3K2ip1ZcsXRDkmx2sBj8KArS5oWrvZuxUAYk3b3jfpZsUTAQXReNV7NQHA",
  "key36": "2d4DNKwACDasQRKz4nLmEJx76pu9tZ5wr7n9BvBw6ogUzS8PDghkWhFnzKRifkZFKPrPnF3nimf4Bt1QzQDrmsRb",
  "key37": "2wRyDUJZ82FL4vh5roWdNMGm5HKTRPZ4YcRZJq68U2E38gByT9zECxKCyZ59SM4Kkmuy9TBotWMFfMdchzynPyRm",
  "key38": "HvbuYw4N5TpJQjmFJpvcLQW12huQpZqzFupdGz9PT52yWPUdhNpmiT7ceZ5By6WmYgsSs2B46kngJh61g7F6vZW",
  "key39": "5WVZCA8ehDKQnpNiYSygDnGGKbBd8iMCy9buZW4ZRM7C4vqQzxMPNozjXhn1GJrttgMZUbs12ZpsmnoQNRP1zNd9",
  "key40": "LuQafxzxVBqP1xsFYXEqMQMWxpqfgUG92wDywAF1Q1382spp8LVjN1Nfk6dkotyZCMhmXh5JqKR3pmsuc1m4937",
  "key41": "5spQp5BtDe8pWCuVTpjwQcxg3FcnwgcDGMd4j4nS54eJdGWh7re2AqmMNi4gBBpUARSktG8XM36QrWrJgCRCyWja",
  "key42": "5kFASMd3PYfJyy9uUF27R1rjSsJ9tSp9miNduxHMZR8pjCGm6TF3yrsi4Gz1CsSssG3FS4pHWJiKjVVhfZ67ekTj",
  "key43": "7hTeFgsA19SXYfnMYKskpZpX3c4o5ncff1FYt5vo7zVTTGXLuFjnJERGw3CUxhLcTsZVzsEFVJjRK7FgJfXXgZj",
  "key44": "doVpDANdjQvkgQwCTWzgWohaN6MomjCPg7YMSbQ3tZy4qpRNpTShJ7mkSPkaurLwCQuqwCBbkyvZeLTpnQs59QR"
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
