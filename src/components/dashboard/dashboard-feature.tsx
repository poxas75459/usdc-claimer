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
    "344h3FDMHaojAqXhR4jgtvoMcHBh29LkUbYVbysQi5WE65gS8pCe64cAiC37tA9evHDr4qtbG1XGukN7EdoQM4pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJixUttgUbhwVZQhdAT9m6uYzm7QJ5Hhz6vNUHLiW7qsmTGpi7UBJuQaVjpdUQKqnsR2hUcqkhcM8xqvSSsCUD3",
  "key1": "32Xjypa6QBkVtRisLb52SfEGvgBpcdZhV5XaYYbVueBK9pBeUf5N4FNgQzGkMa3CViqod1a5ACrNn6rAEm8aoAKK",
  "key2": "5Qgz8Lo4oQXsrTEDrp5Hqc56Tf7cHcbBKGScGQR5SYCnHkhtc8wVHvDjrvqotaejwK51RN9jis5ghVY2fuqR8i4y",
  "key3": "fod3HDDRjupG2c2NRBGbnJWpgS1SaAT2R7WfGZgmaLmoyPmG2JZ2hVbNijnVTWeQgPKA9dndYmR64TEzcwWMnWo",
  "key4": "3YCurXqxQVXp6PC3kimDTLX5ZLx5KwqS81HVmSaxAsJNy7zHWyDDcZwoApbJMvFSi14BhAu46dShWGJmZCekQ6tT",
  "key5": "2wdP8HzQDzmPZXc7NBKxx3jGZp6rEQxksL9DodscCTB6XiZyg3Wc5Z8mwEigQMfoXzpyLbu9FEKXCopmAGEJtTvB",
  "key6": "3uRrtK5ToY1N7rueyAoo4yD1soc3MF1JSVVfYWgsqjv2yzi87BjQVua446nWcBYcVsAmkqVgKje37dHeyW38xhQU",
  "key7": "3ETv2BDq1yJkjfkNWeasLAYdTesaA5TrgFcCupKnsztHKwRNTCkK29Ru9ZXWqsmW2VHwx1mN5Q7ogMYZtJeoWPA",
  "key8": "2UL2hkU894tMdBq6HGFG8fnLd6sDbeJUjTHixQTa2mZFpcqmXeiVZEm6SYbQPPwfnaZw1rhawRj4R4S8hgXHZnVk",
  "key9": "5EhSA2vZjJ3qx7rmxBZ7vV4vPQuEnLK5EAXAk5MkfQ5gS6nA97PF11BYMZBzLnbcmpEZuATJFCoCu2oJche41bii",
  "key10": "2PL51ZfyZeP4f5PFUbfebjoqKcgsmQ2zfK784EhwKUhX3J7EUknX9NoZoGS7Qr3FhsUufWq7jra9TeopftMNfG1N",
  "key11": "3Cwhp6PEQhbtVA8HeCe7WEghK4GUzCxXdhVUJjtuCfJHAri1mfFwXwrwkWdynyeMeL2wkoQyNRLG4gw8wE1BQMAb",
  "key12": "4TUAj1BEgsZ9RCHjDs9De7oFmbN15kMSyBqMuuCMvuRvkckYiNHCVsdr6hV7pE1zgaonhaqvPkF2AobTUnpckSJX",
  "key13": "2nAmwDrvoN7uziBmTd8bpShfEEuFfhWZZz5CBJY9BGFaXkVChjxWnCWiApDT4z7MZftoNQfTx8fdqQbLegwwgggZ",
  "key14": "4qrimv3NFrUDaJ2hiFk2LP1aNvkSZboyApy2fXG4HL3yJqW9ypuAj2a9qKAKPoN2jpjek92i5QagBzpa8PzccZN2",
  "key15": "3DwPJqv8herRjchGq6YGkTHnSQaZrfdQ1FbxezS1DimATb3XtBAWAG4KTR8JF68mVty5EzZjE2Yo45Y7pb7vzH7y",
  "key16": "2KFZxoQVDpEhht3vvk2TdnsbhR4hGmJ8q4iESu236jfxeTNBTNaQutbNooQ8G1YsbtAwUdTi6D7HrUeRH9pFLFYN",
  "key17": "3jAP5Tea4TmKyjYHMTzH3izUJvuSDFLS1gTfKRHR6iSdQ2pmwup6QWdBzSC1TGrYXHZCGGneDGKu94QZy71VLfm6",
  "key18": "5Zc1PtSWeAja4ezeeaG3fKPyAC3pp343TRfhXGW85vRFRw7N9e1irVaqVd3MWeEMCkvXdCc8DFfvRX4caz38m8aM",
  "key19": "48ukPo3nPxi5n8VgH8TWhCYaLp6KVRjd5qLWBgvMWESJ4itAcVHV5wrdyqXRs7wST3B4QAD1pVQUC5xckHt9G1cA",
  "key20": "2uq1RbmaTDBmxu7PdPabr6dKisJZ5jBnC4rfESpPg4jAkzYSxhMuzXaTJ9yHJUYokWCJVbhqLZtP9EfSYiq62oWQ",
  "key21": "4weoRzLyjituTAsZ7yhzueKXi3AtPtck7sU9GM4BxzZ8QMzTzabrdXN1aAeUF6SXxFGuWqJSuuWDbH2PCVvHe6Fw",
  "key22": "3sv2UAjcikqvPKLM1xuYfp7zn53d6tKFUfzHEEgMT79K6hJXRx4EkhdrnG3beEZJoW1E5RKPQrGpAv7RZCHsG353",
  "key23": "4pcEKQsqQrgwA4JgVXt5BRcWNaZ8MTdF35re1Nw3FFrVsF6HyLhV1AxuvFLhszwA4ELuF2XkGc5nVn64t1zUhZH3",
  "key24": "eu1Au5ZhNhea9DcAnw39VLdz7sxQWxV6uzQd1MsxT33YR5E7xWBjCXtNR2uuWjZ4yAL8ymTm7GdDvbsdVePDLoh",
  "key25": "Suo56EEE1j1xpQQtBc4ERFq3stTqKxZMvsyzXZAnMHrhubQsGJPrppT8Kz4ewNHLfmHY9sRjQ6EyzQXYmGKaKh5",
  "key26": "R9TeGmJALi6SyRqaBYMR9hguf8hvb6Jq69LoSqXe43L2UDPQEWGTrYKjAcREetnRkTngRd8dFTDiztvmJLefQ8Y",
  "key27": "2w4HBSEdLv81G5DwZSBt9xMxEdbfBdmnC41ENQMC7PdNC2UFMRZZiHv4oN6cWVnQXvdzwKYZ42cbbRUQxMqUnN9q",
  "key28": "ksKZDkJkNMWkrKQ6kSY3Mqvgf4zPWTEYpXSvQ7bwuUWrj9kzbNgesuNwdY5xZPtQQsVSe7X9BYjSKMftf6Qf5Y6",
  "key29": "nSedKabWTnDHiGxRCJmKGp9YpQFiCQXGQ6Z3nJKDSxfyRA61xWZsYdE85suzYckpeeQXoZ7JhMgGH6mp46q3ZiB",
  "key30": "5P2SHSxNNkeD2iH2XtWkCocaysN3ge9WpEMbMFBWhYsqKsbqux2VrR8KdzHvRFhXzQaKx888EGntiaUnVEJKBsSh",
  "key31": "3TeA93c7nmiEHsGoU7AYXVAzZa3LAS932DgVSKDkbrjCbGjCuFbHzb3pXKcSR3y1K7W3ng8mcAYg9dNXVQqwYBHg",
  "key32": "3aVj2jy379cjHyspkB3iQSyMP71FyDZReG8sGrL3nCFohBCyo4JytdQ1Nk2g8HoA5hZPAS2SwiBpSz313mSfPyMm",
  "key33": "5YSaMQnzK2pyGooxpPADGwNMKQejkebUztR3AcoJWNbpiACPJhxaBjbbZ26Ffna17mWRAtsH1WwLSAKUZkGK4zEm",
  "key34": "v329c7iW3ky5PQgU6CrYyueiJmJ73qq94i4cYnZdK2LPCyPP9qFCtzCPQbwPVkE3BNJVhYC4jUfrgEpEAqMrEv4",
  "key35": "2rpf45yYv2EbWa2qr5LPMmGGLvsavKTUzEAi1iTLiFet2Khw4cA56GzknQBoWYgAYEYHnWMgxiVQyBU2fej3PjZk",
  "key36": "5igrdLLay47Z9BKQfRQwhhYb2XXPMxyyTf5xp28dq7GEofkfukZCfkPmLmjra2oVoA332VwD9kNQ5dop2QuY1qVi",
  "key37": "28jLmMCejpFnx2apvuoqCUD24ePRfxxPUV4N6RVgdWmo9uFonhnBrzLw5DQ5xrbH1RSf2Jo3TH29jZYecYADhj8p",
  "key38": "3K1ozHRMTsj3SjK3zmbxuogR3nW9CgSFS1jNPF8YCYGM4VoXATzBC8wvykA1YLB89opuJxu1DFhnrjqFhRNWpGz4",
  "key39": "32uRYsSjGuzAzKdW9Eu6v4GNbwYLyb8SjGVJWErxBWG3APBN5RP5j6hyVp2zmzZNQDsaU9CnfQbkyk4nED19fjXs",
  "key40": "3fXw9sGFxL5rB5sqxBop2jQDU58paYXUAW3p2vdbW9mkeKQCPN3n6JhjXwqs6PrJQmS77j72xascMVwtJtMTuqUV",
  "key41": "2g5NkUDQv9z69j1KnYbZfKLtxiJwukXEDF92T9wiP6DofWNHHF1qGejas3VpjfRSjnEq1C6iwx1kC5vARh6Dn63P",
  "key42": "48qi5oGHjUbEeHR5hM2oCVsLSRJPHW2TW8netLuXhRuQzyrUPGYATfLwLYEzJMo63yYoWrmSQDwSgAbKEs2s7Kk9",
  "key43": "486cy8MXqe8kr32KreyDgL5ecgG7AoTJv5bKUp7igpXnLroNWGhFDMzLfzMu8m9rYDby3rgBFCYeGJXu5KusoegR",
  "key44": "NoddYjejtSzLwQG3orSdQEcnuWYrhxatX1UYPTj7MvjsVbrwokogWiF55WVwvYqKCmQRcN1Drderhyu4bj4G4sb",
  "key45": "5fgV4vh4FpwaJzsFVggiiPc9rBsHxRk7stKwWZWNNd3jJ8KA5VraxKGrUB8TQSacEW6EC9HdUTWG7dUABDAVJhmU",
  "key46": "5r3hkuDMNRGCq7sREGf2cTUr9PsEhYCU2XzgeoLWNRS3V6CtAVAg86masiZ73vzNPwqkLL4MrrQ6kL5uqruFgSP3"
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
