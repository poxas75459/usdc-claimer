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
    "JyHnsCC3ByhWEUPUS58g5kFJCFcVcBru2XfW7CEQ7EJhrsCAYD1GgVpNKnoEXyAEVmw3D9zNUVhcR6EdKoUiXYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gd9p4xJDQzZCYSRn6oDXXd2Fcr2myBWdcEdFFfyg6aeRzHK9cgckDBR67gGTnzRZ3j8Gs8ToheXcieh2uyKH3AJ",
  "key1": "4yPxGnZXa4Ej1tkNRXwizAvSz1bnktHJH4BDmGyVs3h7AcaznsgmY6NWJHCM7CAfgWJXRFPUdRJ7FE3eDjoz2cBb",
  "key2": "2Taxkh27VH2pJGoy4yzqsAQ3oBGv32AFNmt7oXARjJRm3EBW4Wuz52bkMinefoaHpaLGZ3PQ8c1Jtg4JAtX4Ggpv",
  "key3": "4UoUZSbiWbC3A6zCi7PMgYdb8EyKCHDPXs1xLqUDNcomTnLgsxDMyDFpG6jyMSjprbeGpe1QgfxXgvaR1cD8Ptb3",
  "key4": "3HhyGENzquDTuRj3ZkJ9XieY6f8VhRnVVt8Y8rGEpvYs2CRiR9Kt3bjEQyVGtbkmfGfmwaLunVbbfgEhQL9JzUBL",
  "key5": "2auaF8NYck9gmniRtJ9QYKEbwEwtAWBfZVpASHywKy69BsbmcBDsuH2EGJD6nhg7hygiUpvUimr98R2hhdCsvgKu",
  "key6": "4NPnnpTJSLGBzKhQv3nhgiQEMCHdpMdRQzpE82AaHSEbhuPgUHBZ4cqLJdF6hCcBUfv57QcHpB7VvtxuYbvLcsq1",
  "key7": "3fixtzspe6thuif4Hddqf4tMx5pwBpU4pFk8JticXY84K8vP9dXvybGuBLNdpbxB7YaPmn3egR3UB7bizMmngVFp",
  "key8": "3Bvb91D7yADropJssFLKU5R99GRWHVSeUPuCgxJAZghX4rAQM1h9UU2AZg17onvxm8gSJReMwx8jwTKkMmC52rNs",
  "key9": "2NEUXT2JvkjKE4jDzA3cj8KRL39zPSUUDo6mS1pbAshZX8cgorAespydQU2KWGTvBSGzrvVyUXim8Z9LgovzMAJj",
  "key10": "2UfJFL55ZrHQguUAKxaaiiDx63oFJCt2UMKxbKw5tXuWFpZRjXz4TFu9qK1UF84D6vsrzhnSDrWerYB2WRhWuNCV",
  "key11": "5r29FtGd47BEHRmBDkrZVFAr8uTdKCivDdNvSJ7tYgEfFifvpfZ6R7s6u142VEayhQS2UnQv3gcDgJgNGtC6GAjC",
  "key12": "5M1BQ4oKxCJJN17ZUbSu572m5zGpwyaK7z17SQi2j6NAfDxaaUPPiR2gNFHst7ckYjDfc2qgvuYQ9tybsU9fqjBZ",
  "key13": "2T9oGtSZSBrsie5vu71Yh4DhnX4tDASfV7Usj27TeUPcNkGmg2gPNCUjVeeNPMM1EEhoL2ZyJMudhwpbrEo8f2ck",
  "key14": "3H5Z7dKQ8i9ceNgCYokurMWM1swXzYNCiwH1AKknnnZGqN2282F8EUzTh4HHiELMwxLTo9jtDjTnDoAvrjN3CbNS",
  "key15": "T9jrjxgLCF5U6TtYGGYLVuqaph7u3hyMw8XUqSyG46PUmur9Xu6ndaK976XJ8hH96wxDRRkeDosEdDHRrVoAkrw",
  "key16": "36BWiFGnKZhp9uTYix6AmNira4YRB1hsm54xtvsVNKodzMyxiaAEqtT4qEbbof7DX2Lq6uZ1wp5Z3oyR53LfRfHC",
  "key17": "5C7eqD54bCmqE26bVJrsoxVJ6ZteD5SFgg63UQTTD4hm2ydNkNL2kmi1fNVQGBTDh5VmG1osgugaGMz3EjdtTkjU",
  "key18": "CgsqP4oFSECa7GKhxrUv4WpwsvYNXUMeh2Jx4E9JNzH9JSki2rD3LYi7YkGpjEQdPVFJvetBT5PYGqSyzeNjhAn",
  "key19": "dvP7EhS96VcoaKH1rw5K6D8REsbEUqrgQNsoitwXFrZiM7gLH4xn7qZgxVwuLDFd8z2k1B2V59wzpeBMCTh6bcQ",
  "key20": "4jBtJ9u7uhYSbaxgzMNR8Z3Seu1VPCwggpVQVamL6img7xeMUv1ELf329KThNgRYMBeptLsnct4hNvCsJGHuxY3x",
  "key21": "4hmvpJxhAHqXtoVMkBWCWr7GzTLoPwaAj6mZ1Yyu7DCQS7H266s771uvFX6YetzQBsBLRkXpjsmXuSuUaWVTt642",
  "key22": "5WnJHNbXjk38dyiXi1BPpz62kAFNuRg9VUsn35DWEARmkVfMCFBhRKCEF8jJqbpPVkN6vyiv2XY85jQAHt67aZaM",
  "key23": "2mD9AabGui8pa54gsTtFq3qk3fq3ZPEzwFRn53fPcxHcwGgHbxtb9LsY52cYQ5buqhEdGwsZh2YrvTMKV4MthmWJ",
  "key24": "4Vthnj1McZsizmH3G6giDvuAUiCstmpFA9cNuEeRGbsk7M8cQgXgJqAA1y7HTNrC4r2aJqsXdjC3TGxmgAxfyDKZ",
  "key25": "41GyW5mfV8TcY27v1kXccZ4UuGSb1852mwkkLab1Tmj29qZmmAog4xW8FQjTfxJyhRBbJtejaUcHyfrhdtjwGqx9",
  "key26": "3ZutVcQZniGE5Z2wGYDKXycBbe2ZucXfLNDP3ewVaMFy8i5DbeLVH7ieqzngEMeWUQSb9jC8S8xXjaseAY3YWkc6",
  "key27": "JpzsvoYpfThHhyP1uMDe2qMQ3opd5DpusmiumcfbePVc9gKqwTD5buNeYMBSDP1fu7wMta9ycnpo5bPhzZK9hV4",
  "key28": "LSPk8TzhwdAjMuZCGzsi3b9R59jLuw7rdQEZyQwdY5WGT8mibk6gUj8fEHxaRyhiGMGhex9rjhnbseTBAe5TYwF",
  "key29": "bp9UCR9ieTfoXzJJZthtEEqRVjLr4oAUzgwNmR6ChYWKwrDjs2d8frU5z7HzXNVBjdhzzNfFDfSeFJj3mRfe4Vn",
  "key30": "4bQzC5f8kCu1WjzYTUHTCFT6jrwvPSSQ9gY7v8fFarYTDHV5K54KYBzPyJXMrzHMpcpfXLy9EVfNogpL9CM1H28E",
  "key31": "3df319SuqJurQV9Xgd7TqjTQsEvRmH6QqgUHcXJBgUZ9NLm1vix63W9Xo3zuo238fGnKKCmGLgL3fvJm5jz5tPLb",
  "key32": "5GezKeTEwxsfu7Hi7hhUkXckca4Fd1imHURJXemsaqPxSjENDtKMBAdznyzzhTDmqyrQceddVpf4eA4LcFzsSpgx",
  "key33": "5tuQ2hYH3FTBKcw2kjgjSkTQ5VkHAgCD2KVFiFEwBj2WyPukywcVtwa7PPo15SHYZVeWp6WoRXH8Zwm85Q5P4Pjp",
  "key34": "3PBUUhL5UpFU1XYDfBxyxZzTwAWp3ZRr1RxqzMZdgaJ1Ck9zTQXPmUyxF7BEGUF8pPnTsGwqcoCw7hMQBMonfHMQ",
  "key35": "5kUqx4gv7aSgegxTjQsaVyeGAUHSzGDF5sgfqYRXT84nf4KaWduSscZ6TZVbDyaKB66hpnNog8Dsr1s2jMDVEpjr",
  "key36": "nobbgXqf2BHG5byDdCmNUgCxuav3FkJN4iFUr2eLR4VGQTrY4t9ceJXW9zdwAzQwUCTTQxH3oiEszfAwyvKXn9X",
  "key37": "1ZjSyABZ7hgUCoJks8NTvx8nZxjtfB4By9TSbbk27WzPF1xpuryjXbbT1h9G1ryR7Rpmfqs3HM8YtBQfvZKoQzD"
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
