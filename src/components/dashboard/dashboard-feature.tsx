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
    "2RZcr77Ao65NT1sCvmrTeCFhynRkHxNoyMu1LrNyPpq9whRqPY6Sut8ta7NYGhQYKFWEu92h7TNTA4VkFfJAzpbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bopJ935fLcoHQTVhU69tVm4WLe94tG3Z4H4hpeBYsExB8jSaPZdDFNDqTE1wCEiq9udxWey3QK9aQB1j1ZcPgWv",
  "key1": "nqf7AfMQYbbAieGfmDmD7SHSdyzSEnEyHmfY4g9BMJsY8uDNGPPH1KcMoVuMNKhtrikiW8TzTJv1mWjztrt5GUM",
  "key2": "5VkLMyFkEuFEQNZEvBawhmN8XgbZo76YqHZWPhxJenkZ6LjHE8wTB7VFZHAFND7wXFf75veRHqjQrkPTe924yUXh",
  "key3": "5GCPbXRXDwSRv2JCpEMhcpJHGnqswtX7gLgMPNecjHNjZpg6wu8ysDfgYD6oEQ2vrXU5kdTGqnxWZTwVKGX6opMR",
  "key4": "3QKmX1T9voKvK42Yn3e7JLXLrMumVXh1H5EabrvSmBcdL85maUXiavsDkPoDmMAKcfDSiW3Yjc7LKgYwDZX5s9Ek",
  "key5": "3aEqaLM1dMj972u8Gyxmdy1wrDUYcUPm1wWCEhgT7VM4uVsvw4KJobrmBZxSHAKgPCWbHczaJjTd4Govzpc27DbF",
  "key6": "2RZcH7UwRSZFMNv82iB8ooHVwQdvQ5LdRVPUGGrVDvWgUcYmSrzBn7d5ZLDXnhz5nWKZYyMi8qM5NzVmfkPkJAW9",
  "key7": "5fAcZvfqoAKGPsLJbCVic9JHvMio1xWDA6A64zTqynXKz2PysirAumnfVcBhaGEMKtebfewqS15xA6ebxzrWbPBq",
  "key8": "Q8iDuHkMZo6Z5ung24DNiHFVWxgcHhFEQDy81ja1Pp6CF5fiacVduLQBXvQ38tTwQoxUxTWiwrFUemAxAjPVVhb",
  "key9": "5TN7wVgwwN43WkroMNRHAkv5gAbaQpHaKJwodNYVTmJna8vwcRLHHExKzj2Ni1kLUSJ51JgVJDosMgJj8LZpw9gw",
  "key10": "eG1dpDXDx8JCLSRjZ2fj9VHynD97QJjE3oxu6ryiMiJEeCGtyCjKUjVD4dQM9MhuUHC7qEM3t4rLpd9fX4YEZy7",
  "key11": "5Z7AL9nc1XsFEtroBxha6CgCySuKbHqyDMV7RBxmuEQ3r6VsUUzTwUKrG11a4nqnm7bStZxkz1MdqPZRCvuNt9W6",
  "key12": "5Mtj2rGxFKYztkVxmEJRw3P2HmLuNTgbGJB6feJdnfWXjovvErCBmTy321stL42RqwYaX5TNT2KV6zsGkU5a6Pyw",
  "key13": "Tp1QYNjpGrBaxorjQMjMcdMBeHBnSBbsaphw3kHW4sLHsdTEirFi4gXwJQwazVTy1FDcCfkvnvoYN8XynkPkgjq",
  "key14": "4thcJsnWWqgahzjoiJW9Fvt5H1Lt7Hcuaa1VC3uovapbhQS9zHUGHar7CF7zTex1P5RGAPWLnhvUnUNo3W4XwW7",
  "key15": "4JsmGw2qmuzngf9VtqkJiKan1yhYEkxQpjjc7JhSRYS364rU46DMWpAcp9qMucwbdwEHuxN619A5VBZuWzhtb748",
  "key16": "3SZX14VRzUfLgS88cBhiLay22trd1Dsk796mD4ge7bQsLSGUvsp1ubxvruMCkUEsCfTLFHPLMWFhWqjUzoVmo1mC",
  "key17": "4PkGQ6t1zyEbgyrANZycPbvnAQQ9s8usz5wWbYb7Xp1nBxAsgsVupReFgpZ4sCgbwxvGKa96NrdFwBUuNkrvq6mZ",
  "key18": "RUJKdrJ7GKdbQXrLgGn5kJza5qgfm5MWhXz6Bhz66rKa7qUGKNWYaFRW2rg8eq4WUkXNdYbG5UjYxGzbhrwyXN1",
  "key19": "Ud9GfnNjuTmAMeA6vDA2GHfUDSEUcTA1zoS9rUMBTar2jmUyNTpk9qyQVXj7s8647TLvmN2jt7kHCoezqrZC1vd",
  "key20": "3DeMPV4ZUACT6Ynttm3nQUXAqce44ftQ2BHcWqyoPSWj5DjsYrG4XgRRext43Dmtei8DzksMsgNkxC1bBAVS47GE",
  "key21": "5YSenPeHmHFj7rCZtPacgG2ue4PzBw6wnVX98JuuMqf1VX8kD895Xa8RKp5CmBwNiKUBk4RWaZbibB549xUpk4ph",
  "key22": "hMGRTqiduxXjsDesXsLUQ8SJBrNdhkSuL62Ywtmv5f4bhb3RjjkFepoh2GrTm3TpaSxvmZbYaRrLe6FPGa2edaj",
  "key23": "3qUoActddhGJi7BGbEiFV9qmBrY1AP8oETaaz2fWkAJ6X14ZWM2AGWXvPfz8qMjjuQfmKGNr9urxQPuWAYuCKoGR",
  "key24": "49cTbjCA5nBauNyg9KtTa6LHKdTasxzYKNgiT9VnEY4EToiaw5YeCS1YxTZR7oHWuVrhQm3KPU5nGtyDQupHryF7",
  "key25": "4bhr2fyBcnDEKvgk6FC4sENHqBkajCJ1ZV468a9gnynqB4mB1CBY6tiB3BzL2cSDCQ3a2gjYSDQ295ffjYgEqfu5",
  "key26": "5AdhGnNQW1EtLTjxxFHPPtn89TFWLsTS5RvTyaQJdKR6Sbz7JCaFaDx1XyoiZqXBDnCn2kthz5Qsu1Cz5AmsdL8N",
  "key27": "2oPPzjpK9MsMNrJn14aHbGAHmnAuYNX9ek3LpKkuT68iqMB1Gv24bNB8WKfWa1TuspxcxChyV8ZaEvr17VRVF7sp",
  "key28": "4qdL3XB5X1VnRp3r7nN1U7H38gsfS4YZDwLyBEzA3Gad7WT1pF4RgQ3ktQmyCFfxsuTdMph6m9RhCNhrgEKxhKpc"
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
