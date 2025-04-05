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
    "2wSiq7efCFX1baJEwc9aSeAPQFonZyPAnNKJpXmVJ3e48v3Z7M67nEtmWQUNK6uzHYW4pxTXaSFLRCHDHZKobpbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWMwHwH4JHTwsbGpnQmaDQeLmaf92KbKacCWcV86JEnGgDPNXEmncJsEkdX7F9qdhrWiPEGEWtiCzSnciMJ29RV",
  "key1": "4hCoX1W7tPrWgnKkN2RcZUm66JLHfQ2eYKoghrDHjFigTJR6C1DLRDfFxCaPVajkECgUMo7sEVDFi325JZ1WbxUW",
  "key2": "5CCLQcpaEVVfTHNQ4oKypFHueEfEK3wXnCmQHy5YXTD12MZarFQJkdjcHKNoqyfdGT4eV7j6bNMw9iDTS3J7hfkk",
  "key3": "5ixqKwqqxakJvtymT7TcX338q2F4FKy3cTmWp628gb7Ae8yPtfjZZKas24Zyr3HCZ2EsMq4VSgf6tzEohV622pMR",
  "key4": "3xY6zT74ixWQ8Jy2Yn8ysCx5BbuwrGoEjR5BTLSJcLLKHHmr3y2N3ewipL35W7rXJDTzizkerMUCjBBVghFFPG1J",
  "key5": "3DKFLucMGvQhCoFudQZB2P7Enr9zG3ivbMb9g7dJFdKijHnGapvd3qLouhWezpQxaPCgVKLbUPLBoRo6JG3vmUXF",
  "key6": "3BkgW34QWtm8akQgYA6XWC2jKAqA8VLuKmhJDUzeVrepH1DMMFYFmoH9nxAqJFbDvkeHL1ARqxFqm5snnupyzyxG",
  "key7": "2homMzCy8aXSVzFVnCWAkQfLicuAW5NK1nCqn2bMUuLLY8uBP77Um1P11SQZ8HuuXUMAK3gdyd15KVYcSPgCMA34",
  "key8": "5B7cFEdpzXKb7xaK3j8HkWC5BNo72fKycXd71eTiRnHSmRXNuzr64DmQfuBBWJYGWkGVncRUND2o3DFiYoQBkVfJ",
  "key9": "4PVxm5ZjyKfXsEnrw2gzudssdmw7RU8uVAieor5jRAcUGUc6gxYgEvfdiXQt1c7Rvp4Xm5ZwM7NqE17P7am494r4",
  "key10": "4y2P35DEFDuUXukHZMuVBMTobWzb3SHBTqva7QtktiSVgQjDV3HuqPqFyEf9UDQaqzFdcbeAb6FvhU8NtDFrcNQd",
  "key11": "4XYgPVN45LnUDyr321fPxzvSzWNxMQsrvt2Ti59A6w9zDNzGBVYC5Ej2sq5dhGDyjSCRhG9E8Xyk88QwcNyKJwRT",
  "key12": "55aW2ATTiYaASC9j5dATA8Kux9VoxEKsUQP1JX2o5UAL9sfoRZ5BurQfDnsy84wvmQLaenu6q9akKZ7R3x5TsmRh",
  "key13": "22uGKSsdsJW8nwY9hQZ6h7nFP7MSMLkNNvhwG1hsDYXJzFnZEtqEHaLiBUsCick2YiN7AuNDQupX5guaKLU2D9Rd",
  "key14": "4XNAhvvo31B6SZquvNPGHheBPj7bnZH64gbdXA8m4Lj7Y3Dtg82xWyWLrv2VC9M9PHaBZ3ukqe3XGGLEtrdc8VVx",
  "key15": "29CERMPCto3BbeaTf6SHvLeQ6v4ZT7rBoAB4npoEthPCoaH9bbqMfjKehg5ovLJ8NHubso8ZziySfvaBTjLsGXPW",
  "key16": "3FGHtf8NbfbuKodXHfdXfcCcYKYzxQzHjum8QrsS5jYd9eoT6wmc73fFoHNywrpCWMzgJeSALgectE39cspALsSZ",
  "key17": "TWrKjY7pmZQqYyL7s1XB1Tmyyx1dGB7G6wmBx4RnPMPaz2f1kLzYTgMQ5ForX9d76UAV2jCLi53vGdbHVSWVB1d",
  "key18": "2ft2oNNzrAMxSn6ybaDBZWc5RRST81BnwWwWaXkpmghCphNmUpQ4WMyHevhQdWxCa1MSaMmREgY9KmwWZBEzSTCV",
  "key19": "3ytT9j1wTZkLNZ6NGWvZ9wKaXi9ZdMMjXdPBvcjzFzGmhnBedxJjcVbuS1ApRCkYE7q9cn9M6DwfT9pejQHbKbxz",
  "key20": "2pGLWGiNV4vL4vYBV6WshSQkRw4ruAKJ4aHuVfVxWVH9nvMoUvnpKvXkHybkcadNSd8a7KNubLFah2kUeRc2JhX4",
  "key21": "YkYZQMcpjgnDkV9yXWuuue9k8zcbxxgCs97R4iWnpoZ7Wmeo6mo71qMBrVRf3d6obBoGN8zgs9PWK84NiiPMMct",
  "key22": "4joWPDhacpEyXdV56UVaDQhv4AJhmR4v2TLCaEaM2kKLvzUSiD6ykLr1gxnZUYqZkzbHjZkm49QH1TQqR2bDmdmX",
  "key23": "44L7hj58zmR7PNXxCQQG1wvqdJ97AoowpSHjDYBakBzzGW26GKzEJuKZVQm4mtA5gnkiECrcLNGPk8WgKTVthQdg",
  "key24": "3tTVDTp3qppeJwRsd5qgFN6BFdAx9j4Acwsu5qpu3DcsiS193qJ84PokdYY1zxjKzfDNu48si9rhn5wbpKMT33fS",
  "key25": "F3FNM7xtHom8qELaxZQzj55RLC22zEUknuf59AcJjZBa9pCinci7YHVg6A6hioRWXV9gQEWz7QZhxsR9bGZHs3q",
  "key26": "3bnykn6j2NyAq3V4NfVBjs666AqDfZYqdsouze9jqwahDMWU8H3BHfTYne3zvrR9QDbtcY4qMQDoHX59wUGRkx3H",
  "key27": "3JCGa7erCbiiTXoJ8kgLTwoRdMsLEZNWh5dK1YwqQDrJ1YqfqojWe4S5AoDfqK4rvq27CERTsnXCNnV9VPy6ZYTR",
  "key28": "3YGbXxD46SnQq19k9ZdVXRHp3zdJbnXyBgnNuqDN96Yqwy9gW23MevhgpumX24wpUXHZAKndUebQgCVHc7LreDko",
  "key29": "3rRCuNgQjr1L8mDua8nU3rhKwRVh5SwP83jif94P8vz2aigP4ziY34BMfiLL8ktrWxrT2bgSx8G337c8V7saxVJj",
  "key30": "UKBnwTrEHSFuc2yJ6iBzA3Paoaoo6ynP3HNBXXekE4LaYuCNUeRYXSnGWofdYH6UbADNE5nbHofbPzmzTeqqLiG",
  "key31": "4LnDGKAjQBojYp3yHLSAsTRMVcdZ9A2t6PtjHprZ5Y57K2y2REEWY5XrdNXrhNXatjzUgqA9GmcpkQuf3aJ3MrqV",
  "key32": "51FtEQHcmLRFkUcwAscmHuqR5Sr17vuQcpvbDn6VCaRAEfj52i8KjjZu5itn9y5xUyHbvaokJofzeDwzQ7y5QuJD",
  "key33": "DiRTvnQchKBiTE5NYRwm3USq1gX2PKVphpgxzhmZKjr6fq1iZ5aifyPNadGCaWP2zRcsivx5raUpbNijmFXLaw1",
  "key34": "4o6b19sctBG3yfPnEmRje7k1KdCZFcHLkmRj3ft8x48cGCDWnH95Niy4Yep3KFRoEcKxn3qffuUf6zr6jCHrkwoe",
  "key35": "qqWRoD4CKPwkEKBr6XkTtXdZu5Rtftd1qto2EwZVbpAwXkgEykPuGeVr8Jk5xr7Diz4Yn8d3gSETfMxtkhZp8ev",
  "key36": "3Ts33tWjMZHGHgjXbVAT9jYPLwhDkQ2r4mQkgpBzrc8KSRpHfowbSQ8S5CRQ25Dv33RTxwHkZy24vLGHcYgLPYJW",
  "key37": "52mdJU738j3Ap4q8qbPeGNx56ryFzXA2Uu9QQ9BJ69JqAVjRTCpJrEY8dmqvmwr2cg4QTqvBP69n8ZZgwZwEgp8T",
  "key38": "sp2prUDB1U7G488NjLZ2KpiLzVGiKYMUHvNeqKekMwVxQM2LbvcucKJ5ZdZbMrzBfJQhEKqq7hNM2JQ74PMkqLq",
  "key39": "64gHJkpddXeXfxMVbuGofp6r7pr8xkBKc4WJZ4nviZiK8Wob5E6wGobygzEYgErhRRCDkhH1zQRb4CadUUnmzzXW",
  "key40": "5RRG23F7YfL94c1Xi8YQCJufgj8gSc1tj2gTbnwGSk18voTj8Kxf1Hg3YCnnSUkxPLPSBno6DbTco8zNb8DqY4QL",
  "key41": "5MXmLh3jWk7TYiG7ecLMnq2R8FEeiG593SCQeiG3a1Dp2jHf6TqMnmRud9ULrT33HXEbfT9jojc2jFPdERyQJSwq",
  "key42": "26S4M8TLSyiRnuc3swgnnVMYTGEqPtdWjTB3r8fckRG7R5pU51c3mRtLBbPyeNqEWU8hQDstuiW9RZiNZaVBhQWT",
  "key43": "JHfqzphcm9TnNk6gJj9gi38AXyrrXGC92KZ66LGG2zx3ujD27Uf1J19nc1RLb8aBM8U4Ssm1nPoDZG5Q6F1anZF",
  "key44": "5YxHP4R7KwyFg49dGxsEsxAR1SSqYf22ECz7YjXE1HuL28HRCN41DVHwMAqgP5B8Ly2rXTu4ZGWvh29R9oirCsmk",
  "key45": "bbA6NytvgLM7DP2zVkTnj3VcG12bmuDLzEw3MPFK8cCfLzHxfKoEZGnroZP1JqDLtyGKjkZ8iQA7q8HRp3nqH8x"
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
