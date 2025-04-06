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
    "45eX3LEVcP38Hpz2Ts5U92MPq6iqcH5qKodB5KrCUdiuwLqCPULgK5DvGWn85EwPPcETtT3zcRrwPobur5XF8Tbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z2cYjyMEG5KnLS64WgPDXsmk4Hzmaue864TWmn4AchGu2UzNZTU3iskkxugZJS3oDH816cz9u3vJPPN3fLmkhEx",
  "key1": "RtKzkG156xZP6VTKF9GzP9uMvixLrzuKfTBFBKRWZWEs7uyQZokSkM1c3B46f8BKoezr5E1PxxwEUADdGqP4awG",
  "key2": "3N3oSdpR48VqBGod52AWzpULSR5ze1PFq1atuyDXYW9YjhPUrxeLxz1xZjEj1JHMZiXJQ3bZB5PVkbbpnEikA4m8",
  "key3": "jKetdPF1GATYcvBh6iDwLL4beFwobfzr7ofntg1TEt3iMTfQhE9xoeHUVoV7GJRZv4Su8QSu3kVd8EnMNSMHU1q",
  "key4": "4Hn4aMgJVsJD99omPwyomj74xYPJs97hsQNzd4SUQgYLrLQbWxaJDgjn5zqBuNTz4YLihGCMLA9YEYJAYi6n5MJ",
  "key5": "5usU2x6D8ps1qDEo5URU6xyW67nkWAFWSPv3EjAc4rSqJqc7VSnbcDv5dtR9PhoYGjEKE54bwgcxTKrZwAKizYb1",
  "key6": "2cdRhToRs94CWGvFK5ZmLSyRFvu6EpcUyA3A8JALGWjmVUmxikBiSohGA19rUPGN87LsGbCY9shc95EzjnNzHFjm",
  "key7": "NvMLNNJFnRktJ5LLq9o2LVFosB1nXg9fHscbc85YTa9JFhk1awiLizAYXQQeKW2MrcF8QM1BPZTg2z9Cxwv33Mb",
  "key8": "NUBegEAuH8awWgaK9D52prEy5XX5ePDgDoQSfjMbnAfwqpiC8m5HZvQsE1YVYg2QWhDpAmEmvHnU14YTpX5ST4P",
  "key9": "5m6LLyMV1kC4GhjAqoQTWmJAMbvid3cAogLY9Z4H78UXNjYvdCJ9LXPfXqGtGDuQ8hWo77PLV41xXZNNnuyjpzSz",
  "key10": "2zR7vFwZ2fqqKreUFRvL9tVocgJ9iQoa7XySUFfshSwmrYrDGQ2am7iRcQn7u4huoe42tRg7Xhj2SfJWUSGLUMaw",
  "key11": "5ed5wZaFsD2mJqJ3Lj9PdDBC7VcoFZzDC51FPhXS9SawiQb6jKUAb7YxPJLLWCqNohppGgWtuarDtt1APDQ2YaFr",
  "key12": "tagvTRweVgxwiwVkwHVG9FRVFyjUf3X3Z7tMXQvdVXNZZQVwg36HTaMzSTCbCDTVotE8uCRbRPEY5YgZbPJqGbr",
  "key13": "4u5SnUYMBvbVx4Rtdi3mEUR4wreMf4DiC2bj3HtmMbz44QK7uPhc3MnSTkg2ipoAgAJMogCSQpEeohZWVBWbhUeF",
  "key14": "Rd5gxi9XDsh1Rd1ynae7x9W8LBHznpzeJfKoCKhJ1Eci8Qg2Zt7WD9atCxua5SuyNDVai2vm6aegcq95yg62vmR",
  "key15": "FhFcxe5oWoJSh4Tz8s8usGDiTdbz6TbX8WDM7edrmRR9BS9zjZs3H9FUKYrgTfxEDTGLWVve52iFNmP1SmUgN53",
  "key16": "3Btu51hRV8jNuCnNg5bBDToxgD7jJsXK4gdkqDQAPQkX6YMiAkJrt35vecE2Lz1rEypBAwfMS12tuEgMzZZ4wXMD",
  "key17": "43SWfnY46AZP42FzKUkgnCLTSHzKpVBQbE3A1QupmnUpxX64nNEbm3hyGD8YcnW2mR7igDDVfTkWzsYPErY82L4g",
  "key18": "212PqwcEZUeDfWfXW7a4cRqWGDbtVa6HVKFzwnZFW3gXA13AzdqSgDfaSHAdyrgHZtM4mGcwFniv2ECpGQANDsC1",
  "key19": "2zeZcpSXPccZW6HfGgX65222wnUgJLtppEyMkZN4VGUtPL1yZfSXSui5XC8uiG2bU6USqDrkNuapf7SJWvXLPeUr",
  "key20": "2yKFrScLrMpJcSjhqiZo8gN7L8QLJh53hgwgzVa7qu7DHUf5k3Yg1CovWfFqu6FZHneq1mL2EntrJbBTRibF5TyM",
  "key21": "5UfwY2e6fyt9Cm3So8PsSP2mwRG77j3hfyCK4exKWCiAPZieHDsq2C8DMdn6N6HxLX8FRjsUoW1FvbwJ5nRJB26h",
  "key22": "5dDD9cVe2gundRpcKtWa5ERMFKUGBVv8uSp24TJY396fYrKyTEzi8G6wexPRC5KZNHDx1vDQLPcDkfn6MNeKHbSg",
  "key23": "2W1E2V3usiUXKaythxJ1W1iHDsF1NpVXKnrnFbFjFcGcbCF2pZRAoYhLEVzSC5RXquUUfLAKv5YXJJ7W9amzgFbs",
  "key24": "2yJgRy6knJ1FKVuEutKtv1TiqGLsY5ZZS5M6hDUtaxeAMcWCHELSKcN166fMU26AjhArXXrUTH9utqv8r3P7jWY8",
  "key25": "543CZPozquXmQpis7sb7PbQuDdsH8cKBFcx96ZyhgMhd76t7TmpaTwkvS7Pb7TQh8ZhMw8E61c6unCr8tWWNGaEM",
  "key26": "374u3yHvNzUNvG2riPevYut6N2WzmWrKEUdrpefUxT3pT1fNt19Utn8Y7L3Sx9Z39BmRdhNRnxfBBmsbwp8oZdpU",
  "key27": "2EAGim5RZTAEFEeFBZdiYyUk3w4nirif4BZjMgerAQs7H8ijTBJiprFczjhRaQHUUGYhJGcw3n8kuYtRcUs8QiJm",
  "key28": "3WeMdzXByPkbWk2e2TCubWfxveCSHJNU2YksVi63B96V5tQPU8HterMtyMCTh27kgHGkuaFFRHHTeKKoqyiUXYWN",
  "key29": "NNN8zdeGkP69gop6dRWawRphDP9vjkPNPK9PTwZC3vpbskw8tg2JXBzse13VJk7nfhzjsi4Q2ohjemjrVn3fG8V",
  "key30": "3nMiaxWsKgosBRkg4H7uMpBazwes4WYVodrASLN4GpuPQTgsLzdJMAfFZSfSrbGt55SNzKJJre6eprLQcVaGqE2d",
  "key31": "4uJm1AaAAJPqgQ1rh2zC7LJuFmbrjbjHq43Y29F1VnNnS3uRMVtuVSKLmcXjBP1G4XR3hyHwwjCa2tK2UuSXcs2P",
  "key32": "5t8AJzhRCxsie4W5NL5p3miE5SbCGZtiZRcuKa2NbKQgsGvacAvSV8tpfisCaTxodB91rw5SeTekqtNAie2wdrMt",
  "key33": "34FaC7Qx8vwwnA5UZCAXoCCaQm8EPqE6HX2cDTJ3S5c7HYAZss5pppY86mr1qHxwr9t9ZK3WFq2mShVhNqG5dvYF",
  "key34": "3VqnGPDrYmNPqYx8TLSGxZTcatYMYimrWpbEHwipGUJftnQENV8pCWMj4RLNnWwyoxSTZQP1tmnk7epCdDRoHekR",
  "key35": "5BaaZr6k28ZjhkHpSwcRh9Sazjv7YYrRYpvRoNZJtPXcwM1LxQgFNbmW9DiuvhJdHKydk93dtbMqRUQyNa6PK6Ny",
  "key36": "5LBpRFNgVje8c1YtsVZtFxSmn1wtQ3r8CX1QJeZsC9RSCVbLBJb82N8PwABKvu58df6vLsMtwmYtMVPeebLJUnRP",
  "key37": "WyXtY3YNQBd1W3ghJA1NtYt1n1bii1Dom5hcBwLnUvig42ZqzsRqsmTRbucjMeKmTibka2weoR2BfPFjJLXsDuh",
  "key38": "2YjfQ7oU3HbQycJfCWfGbjHcAtLmVE9LBdkH7x1umEuqVVuEwSE29SiCsVwcpxepTMFgyQEnq5qXZuTZ1Sh1sXd6",
  "key39": "37HJrraFCkUJsoCBiJvHhNigC9oCi829RtvFkP7nAVCEf6YTkB43hEeJZbyicdKx4wTLVZVcPQrzAC8dTqEs3VzF",
  "key40": "3YGTjc5YadbJFRmL5m7x8kpEstUvK4NdHJDLuEMftzWMi29Jmt5LrJmRAJ3wVGVo9jwGkprx2ZL2FxQ4vwTB2rWf",
  "key41": "33c1ZVxxS8SqmDcmnKhts7b1KdX8peLSGs72UPQu6vr8CFedmH25PewdSJDXFCVM6gKrF6UFy66Mc78RHXqi53oM",
  "key42": "KMUNGGCWUeEHC6icg6zMALkrBh9N9NwuDx6KQ7ffKHibgmjWr6PQxt8TmNxZnQ62feFBvGS1HeKYCWd9j1Erqbu",
  "key43": "5fYiufyNgpjZ2uS4ih945bXryjRGqH3XyH22wA4jikLRatiMP2DVwQhACmaWDNCNwoR9Ueqnofg1YECceFDDYiLx",
  "key44": "2nuDn6mtPpLFUxS1MCNUpbQiK13gkEXKQBYRcFSEAcATa4EUKXeqJYmYpbvfrU2KinqvHrSVgxH6wn2sWcnr9faX",
  "key45": "3mwabLgRrbUyY1Va786Lq8K7MYDfq16gFxKPFbA1cj7b4rG45DakybfTQXSBN3zbtP3zvNgmUHZPvnfSWgRnppPN",
  "key46": "4UAvcocKJYs4gvZTeMbYNuPFJanF7XcKAL93gfzhna5QfCxHSWDAXz6GdCaA62XChmjvk91YAkw6dA13kuSG8Kbv",
  "key47": "2KvgSQuEqAw14Eo9KKnfXhh4W7bJks4LxDSDnip1LX5zz4yxttpWVCmTw4ov7bwqquwCCidgbCDa7NDv6ppfGaEB",
  "key48": "4R4t7frQpWGo4GhAUxpN84gvtHmfpLtviAJn7isVHwu3AvqseYvt8yCs9KymzERj1wayZFYe35sqjSdRRFsuYLyL"
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
