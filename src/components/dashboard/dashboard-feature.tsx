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
    "Lcm1KC1VdVntGuxjLrdM7Rq5FdPr7Q6A6jQ2NL5MqFLporAwSyHD8URFVWQbx5YtcpcShpNvPkw6NcDkZ2ETxkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woNFUFeSX82TdAfsxVpHzRiyXyLkRPUMoEan3ttyegYm8v5qCQWudovUd1S3f44Nz4F1JJh1kBkKUBHtCBz7QLB",
  "key1": "dgXPfpmbCNj5GUH5kkMmYZXrhZEJo6XYAJur9c462dgaXcTm1smgufRhHzU78C32UiS42Bd19N7NajWb3AK18zU",
  "key2": "3LNpS76pNYqZfzpu9FMJCdmoZL1hHoKi4isoFPqNeJK2DnW1vK8QxGcd5a4uEsktsBX1NzZnrr7TsT7C2JJwsaJU",
  "key3": "3fQCY8NPB2veYXGYawTozrX5BT9tTEKcoATt8RCMcqgjH8qiuJEoUABVJjRitDzicdiaGqQfp77Bt5j4NuJCSJ1E",
  "key4": "2a3wKiMcagYaS7hwqmtRp8wnXnr8KL5HbHZrF4jn7f2epNjLv7TbftrRswM3zEi3HizaSJn7uVBHiWiH7qSYb1RV",
  "key5": "4Kp7CajHvVLChehnh4BnjnrktLCGYsS7C3jXZaem9LbVQisqgcAWy5KTVFKJwRVhfoQvyBJT9gxPxSKhALCWRJfJ",
  "key6": "BWhw7coNbeDzYoKJ1DeKQ6wXpJZJmxiJfACBGoTFGkiT6iZwX6nVAJgjAK14qJLEHktm522ovnc47XPMYoFV5tB",
  "key7": "U3HsgU6f2viNJdL1kpDsq71Sn7hMZWtbqndfeCkuAy1zYesTmp8oCZJmFASznXTS1GWL4HZh61fhgW4wm1Ew6QJ",
  "key8": "3tcPjvwRaZ9ndqBP84o3Ps4zDVVzS5SMd8X5JjU5eBohm9KkoC11iHbddafN83ADVoCV3eaziZBV2uTRe7DpWyVK",
  "key9": "4ZQFdXhtj4PQvG4EPmELVhPHHaAAyjwPyiv6As4czRrdQt936LR9p1yBNH2LFGGuXZ3ydFDzm6gfpHnZw2kjrquC",
  "key10": "38LHQ6NujtkP7L6h3QQd23h52ahKTjboxSWCjC1UknqcYNEbDBw4acGgJj4K1vPoke7CY89ihnwSAKMnFsoaPZiv",
  "key11": "q6R5x21z3mN2mGsg918PpfWpLYECo7KySH8UwFAgnGPCq5fQqkJ3pkVpwTkghxhWXm2himLkk2vUBBXKcRNxJBW",
  "key12": "3jUV1xd5KZw77zCbG25h1q2gfJ7YhjyvE1kuum4VNxFF8CkQJX3ECSsqahMUZ9FWEPFcbmLEVgi1hyqzjkv27GiE",
  "key13": "2KwYLLVrMDHW2g1F3kzGF1VumNia6S4sdYDRCnct2B4bSLJEiqF9gt3Mp9u2dbPastCU7vr7GwwB21qMCfMvj7VN",
  "key14": "iaAKdwJjhUgB1dKTanHSTiqk55Q9dqRUJo3zjTbuNXQN1oSZQX6mWxwFBGgJhxdBxpj1RUKsT29DNDTGQLQE3Rb",
  "key15": "5oDf82qGCv36TfTMLANpHFGfXsHHVREHaYgwknZKbed7DjesKhmGLofcpfpcuX1BbMkSrXDdHpNuHj4SQmFv2sA6",
  "key16": "3LgZkpeCWNEKi1hQmPEsKwFpGz7LQAcj9zFFQyujETzuqrPREVnMEBfwST4M1hZH7Ahtgja4zXGaZmjAtjoRR8Jv",
  "key17": "64M3Fz5inrEWgfwGq5tkAjiDMD5Z6odvf3RESXP5BW1Ym1gcFfTtNWQpVkd46aptuRgb2nAwC9i6r9wvUuPCT1zf",
  "key18": "5eFbPUoCH6PjTwfpRP3FwjfyzhfE2mY3JzVbsKX7oy1m6CkNNnXcsxX6oSBbK1tAPpcA2JPVwD8n6PkWXVFTo2y9",
  "key19": "b8pQfN8hk7mu2SK1FKYkFFfegHPG1ZgUxLwpbdkfkPHMvgAvo4fmdL5NcTNFFngaHWa5aLJvHxew97x8rbsghDD",
  "key20": "4fHiQbrBA8gZNc4GqmjKe535zj7hQ8KJLV8RngosKniDjN2usqTFzhMyJa5u95ZDZMCe48LHnv4tb2W4QkNkWbmw",
  "key21": "3PM4v3TZ2VgeLjcniRFJL7EHdqQePPNdvGxma1wzASv5cYxcpyoNSdr4URo7NtkCrCgKD92S198PuYB9uxcNVvrp",
  "key22": "3hjEXCv8ZZwKj9UQmv8ZWMZGZJZz7jUVrKBweLTeSM1g89vBtiMToQJrfCVk1QnK69oP1UDicJm1j4T3LuysxRMQ",
  "key23": "5hE9Hwgd1bVSqncqbcXTxokE1KhX6zY9aGLaCjetGmBhYGKcG927x3wPGK9n7eJe9XUSuCFLebVBr2uiSPRvkEN6",
  "key24": "2xZ7CBJUkos44RCiAASftJadbYw3uXTGeuAhdRmxUy1DMwigrkgrgFbGzoS15oiVpN2JuhQWXt5Lqec2Q3rvEHox",
  "key25": "2eEajVroydeR8yjQpr2AxrX7jzmt8t5gAXgh153LddyTJ42sWPR9oLd8gQA3cp1ecb61FmUhzSCjb7HV3e4mcAKm",
  "key26": "38oW4mzUJ2BkeFqaJTt12TPqE6oKSZtywFEavcPPHfg49WxAaTJDkanfvzb9YUkEXbxUA3hvXsb3FbMwVATbCsmj",
  "key27": "uXjPFqxPqM4AJ9akrPQZyZPzkdT1FhzwmMTJUgH748p3UPuDYazBXUACZNwQW8dxY921mysQoGEs12swNnWFtut",
  "key28": "2mhDPo7G2PBHbmP4u5TxQ3RN9HjK3BaE6YAr5WLsJz8UsbpLP1FEPqwYUV7N36fS1Qa5wnEzG91Mm3PqEYjzyicE",
  "key29": "3m19HRcK8rNtHtusiKzhk73DCazhUPCujuuuHJC9gVDH2gJt4PExyYqeY9pAhKJ8nVGVG9ANyG9yVFcB9SpSeDdn",
  "key30": "XqotL9CdCTdWmRFJmfL6MuwYc2u8yfG8MAqnp52x2xcRBDtBZbxr2wxa33KzPzPm5vCr4BiKXYBYEgSG3Sr3FAU",
  "key31": "3Bay56kgotqLk4CGwKKjYcnKzKWyNSv8TsjTpKTog8CrJhPG5QgAEQZkKsAqHcRKRupvrFDpFwTGBW2gtuHFj4Ws",
  "key32": "2AGNviXJ32SHb58sEM5ejdPyW3TPw1hq333iBgmPzLmUcTPffAqPSvkaNkUwpjt3iJdB4bDD6ZhNnqPQyzUVP2vs",
  "key33": "5j2pmCLVLfRrhYo6zQ1roWyxCjED2DDPnFrEeSXKFnSKC6W6n6L1MCkDB2xEMboKEuLy6L5g1iEKytPiYzQH4FXB",
  "key34": "553VrButbBL8Y1d8sBY7qiMwPgPmhVtMJxQfhSWvPL52MMzrz2hpDX9pctc6BnBBp6KFDwXkYvVaqR2P1WyT1iGN",
  "key35": "3dJU12qiDstF71LFwf4ddbkufa2jijvpttyjFtqMSrfpgybHVZn4stxGAhcWDHChrfttKTGKhpT3zr3rnYtZZXcx",
  "key36": "dxF5KSgyWYTasz3oXg3WDQLkuDFSN78KW8nS2kBzMTQi8EYMNj4AkpFMaCWpfqRPJMNY9eMZR6RroozZhFexpVY",
  "key37": "144eEjxhRs9HxCCbvcvwkRXbcH3AMUNZLeW9R9cJJnFRECgzYYoFSEr7uQcDdz4URmSSPUHQesxBJ6Fvmf41y8K",
  "key38": "4LEU8Rqhg9Yupaoaa6Eyo38Xr4aKvqpBagFyyuTi2nZ72amG1sK3V4Z6oAuMegZyNdcrBsCFp1cgLksAfgLCUwAw",
  "key39": "5WzSNFKKTLuDhtmjBT1n6VLXKAZdT6xxJieUx3zQzfJ9cVfMXJ4Wtr6GKHpgFD18JVuBvoPMFeKarxxVLWHWFva9",
  "key40": "2p3c9mCzMys9BQwKP5ACWjSMgArmnqJo31b1fexEtAi9p4neUEinDUMAtBZAy3wr4zPN57o99em6BPQPi2xaVEPU",
  "key41": "4RqeAAkFHLfbXSMtb74pJM1LJPsbzkowZyuGEnrLFNm7PpqyFahYTfcFDdb7SFd49rmkxfeiYebCtzS4fSpwPnF1",
  "key42": "64AajnekkUJABPQX9sgdDnYd1RJ4h8HS8Mxr9r3BgtaRXANF6VV1pvN3vQJrrgFyEzfQqd5ooFmx4tzKjfWacTgF",
  "key43": "5shGnLjdeNxHfSMUvLdzqArwNMFP5p4btqAhxjq6iWoEotbVra5RoWEH9tYTzPst2eHq7gx2zpz59WB8zjKjoesV",
  "key44": "4Yjwk4ZXmQJpwdDo8U3g9LFwLix8cFsxhXsPyMeBvY5yYupzJwYYxVL3pQK3Vt4W15t16pWAo9eDDvGc8xHrJGk6",
  "key45": "2TcYTm3pdJSNko7MVAP9rMZpXS1HKywDcNy1PJNj51u6pHBywzmZtqtkavuwU5KxGfXqnomGnUimHxGTCcTYV6Wm",
  "key46": "5rHJn5YF9jPt6hptySxJcCM2rjtXd85Ba6zseP1ikkNPwdt56NsXNwp25Yr1efJrEkyA6HnDSqbczCEpBNybrmh",
  "key47": "oDHuumrdawuxe4X8SwXw2wgpUYWbedB1q8UHvojM3GVWLMbtjy5PeyvsZ3KoZFYwuMkS4SCiGTdJv2PiyYfFvc6"
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
