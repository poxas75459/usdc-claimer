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
    "scunzmCe6SPvcSnYgJFk5NwX3fys3STGKTsSebfjPqdcHKe6xuujJCoJbJaqvLk9McsusijCjykmEKzMnFM7QoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNhqtrY2XJKbteGHzGaVvAwVWfJM5siHDLVSQGRRvESFsbjCgWWWE9fP7kAi4TvnfzPL9bo1sgKor4e5YnaTLT4",
  "key1": "5ZrvB6G16rNkmVYWaEe3mHFKAvf77JEwYJ7JFbmeBTzVdRS8BRKzbmx4PpnRV24Rzum4CgBWFM62MkEKM2CPt337",
  "key2": "3XFFPEvvTbqCxqhmLdtp56UeEQeKCoKhPuB3Yc61PP5WeYUBpaDszpYDcj6vH2EG97fLBm7Ss9STGh7TidteB6FU",
  "key3": "AicT9cswB4QUSCNuyCkjUioZwSQMY3LTGZKRUdcJxcovDKS5Q2nzL3Evdsc9gxcR29DLV99KqpbraJbtikBvE6S",
  "key4": "5x2oUVu8GdZB4uWAmi15EJuoLJcUyDLkSXpFXLhhmXbpwZe6aVb9Ky6SYvmPZ7429FM9ndrb5DXDFXDsgSwVSBk4",
  "key5": "2iPApBc3Pr67GHsWhqGadphDnrMKwVoj9xzgoJCcerDfk44jrTBgfTk3QBX5V8KQi5GRaRuphu7YiCR9qMiP4qnE",
  "key6": "RZvuxN5DbXL4qr66tRRRjWpdZ42irSMeBuBX9EcCCw8TpZ4e8D4TcPjjrQ1D7nCgPdbV7ieAA2d1FApn1WYo3W1",
  "key7": "27DiGbg5t97pzLGQVmVjrk8y6cxk3g4SQ3VTxxZHtz3QphDCNCBGBpeG93eCH5Kicsg1didA79U4HkJTFvbJvEeX",
  "key8": "2w5JphJx4uW2X6H4PkF68uNFXgRqisdUvJjAHcprCogGC5HXb9hrQC9rqDUng7oghKoRRbNbzRdKHFJW6pamTaPn",
  "key9": "3SfpeCo6s5DmiHYjRV7zbMvMho3hQmjNE6bQiQNe9bAUQmZqQsffaoK381WG491d3ktNF7RazrTd9GqjQZkdKLBn",
  "key10": "f53LKqVmT9GmqeSqWUQriGonj8NwkYFj332fNaFQn1xeZuG8w5izRsmjttrtJVEfS2nuG36eaUdKqNJF7b3naSF",
  "key11": "vJirX7e1N7azfL9aM4fQW1Td7nuUWYjqwaBAj6ko4uivsw5MyP24kBT8H1PfRbf2FZjfNjPEoUT4U79xNsw3FUn",
  "key12": "Xb4AQXrvh5HyhUFPWFkKKgcDMgTcFdEFFsDpGgCLM4CpC5UgnjvtiWCnBDSZudUDCTeeqAkFro7kYVnUzPPdLGC",
  "key13": "56CbCduQeUoW7VcAgeLRAF5kiWmKzkFKz3zvUUGppojvEDmWormZz6ZFkkNrRnopFsVMdjUsZeNYxdQ5gYbFWzkK",
  "key14": "3uWuHiZSntaJ9pSqUJTyUAHxy37UTAergkoJH1CZFR6hHUYpkjjvHgU1uCSabZXYivDAQfnG4ocHhnh2v5Jqv337",
  "key15": "4284Cbsse8tySuYaDndfzkgbnfjZC6y9tf9nGqiH5vJAHQgssZunZNLmqUKqCLEeGYVfzEMBCJ3YS2dgN4LnWTn9",
  "key16": "4uiAcNogu6jrRu7Dkxb8PT7FpeAYhdVZVc6zA16XwnJymsZaRMuqJyBr6u6qm2ADb7hyepnPxUxSTD2ixCrmRDYW",
  "key17": "2213ND8UkMkykLiUpYqnmNAiCWZjbGWVwwtygPYQVaZZSVBRLn8tLduE4K3SDRfmmvjcTfAG7vCoUx8SM5Bsnrbw",
  "key18": "3aALd9pwP3QFiqU33MzKEuKWRpv8yRCXE7UPpy5JhkFXJRfrFqUfKcQqnjW6bsByBpp1QD9xGP3Z9F2m3XPpTs4G",
  "key19": "3F1p76kZMrr5eHZqo88QKnz59wL9NYrHz747dgK1fzutjtkiSyouCfC79HHuazg3biG1WoTPWiQ9TQptyC7cLaiE",
  "key20": "TNMUYcoHdFKSiuQ24DUoGjFnxZ5hUt8TJDVKWELNvN3MgFoGW8tjEBfCkC7KKCgdKwvBuyZ4APFkM1dUPpc1kQ1",
  "key21": "4SPkbgpmE8rk8uXUXfhNcZqnzzDVznzdHVMdVK1qfRRN3kgmeYAcai4sARwQtvf3SweNjfDCDkrEvbMvMhKbyw6i",
  "key22": "3LmM2TkQ8oBYwSX4VEzVPzPCMS5QpnNRyGUhYWB6pbD9pyJQVfQXBZzmc3xWGQ5ki2gwX1LFiq5cubU3p7WQoNCt",
  "key23": "2tY5AyxtDVTWE5VgFCeySaQVhD2sGeehGFXCppMPRuGwaRmf6hfb1VTRgqLfjzvNRuag6XwnzAVZWpbGmB5Frmej",
  "key24": "RzUC3hGREDzRAXfkRc1kvCoEvk6AvS1LBvYCjPRkykFBCayHLU48jZXqg2a2xjEiheWN9KhT2jQ5pGFTLT4b6g6"
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
