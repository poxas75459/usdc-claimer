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
    "59pL98dnv1MPu8vh3KcciyaP2M45SLmnJseM1qaA4VheBQe8TKYNDZjJMLVtQuJmLNph9xddSSBEGLf21mEVNZAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHRN3eSnM1J1f2d4jmXY2tKv2fNLm9UNriMRDCyzJ83qgjVp931AvwYXENbTFFheYArzGiGxyyX334FMyjNkGB2",
  "key1": "5hD6pNZ7Czbp4fdc7DajCUxcvBGiFymm5WkKmyhvkPCkAf1fJZ3CyusadVqmQTHQVyuwBuihM3nqMVxuFBMspX8K",
  "key2": "2xykWG5Ec57rMRC6aRGZtaVy25xVBJDKDxrUiaGtz12rqhw1HWfD718N8vqzEjcVesZDUUkqTCKARTY3sGFUkKWZ",
  "key3": "3VkdP5AQEJbs5cKp3xWmRVFpPrMeoQztHvaRLsE48xLpJ6Vfdy6VvPxxn9ebxfQ7imPZdVkgD7fRgEbzUVasZ32S",
  "key4": "4F5qxCVYzRXikCYUq5zuk9DHD61Nhi4Rr7hz3YchstYGBCajmqDLn55HmXB8qDSvXAVJMaA7VrRVVb9hqaB8xrMt",
  "key5": "5BSSKSkGfoutb8yAAYaJtbAHaoghYqAjizdDVvAHiweifn61PTugvQfRy8YB7g5SVVp4YiFA9CBMAAJeBWS7NmsR",
  "key6": "4RXnEuZySaXpn3Fpv4raDonNjcfN3mrokfbmVLJkXzyFVv83twBk9JMS6Asd51av5MQD9DhpJaoFaTsUgc6qeZyZ",
  "key7": "2vn1LaR94sn7hqaapPtYpcgy7HnPAtsEfh8XJivePHEx8eKpYFfQhJNjeEHPMxBfxspYTcA9ZdSt6ripcjPEKYoj",
  "key8": "krqYNhze38DanEM3p5hPk4V1SYCUECMws8pu1rHpYposKecEJWveRTA4VDXLcybgUByLwnK5HTKCArTz9MX1c1E",
  "key9": "3j7xt2L2UAQCw5TMg2NgPv9BLETUeHMwnKVv9mdVntctUpQeiALNVSGTQgUJm8d67HHqKVQRYsmjxffq4dPDTRHs",
  "key10": "3sqXwy294asv2XUHeTfdzAqWCsPr6ZowZWGDvVefjM8EdJ6kuXuahZRajsjqimzXMt2BJY7Mykg9QW8i24ZQh4QF",
  "key11": "2wL62vg5xcFMiYZZYyndeBtLskaua7kvT94kjpPPukoMHxARPVMqPe6tCiBvHDcwkdWkhWFBAiqVr3cPjPTPH21T",
  "key12": "5ssVcsVvXnrMqk45HKQDMAB2YmhiFBg3eyq4fQeGUCgRLvYqPsuhxSY3A7bpK1vsNctAmGBjeNEr54PWPAAYPUfE",
  "key13": "4WQNQSL6WSaU7VtP4P1TVexpmRQ3WDkDF3C224Ja7h92QDTuH2qzd2AwGtZa5D2po1cEMkQoctyv89kPNqgJHzcB",
  "key14": "54yhFifKrBnbP9ypzHDKdkv2nS88GEHibU2EkiQCVpyXJ1DutVdFQoB6dhUTDXe7TK67BAXU2ere8qnu1EPnCueP",
  "key15": "5HybSpED81EQ2By6oZb9RyxjXiiNA9m3zqxcr8enarJz3sGA5KkSH8nRK6cVTbEhp9rDeSvNFFGqtdp7tcoV9P6Y",
  "key16": "4XBdLq9mQBT2puMautugsjXPe7aPgBcxUhdsNmueBYUPzuHX6iT2maNd4g56nKDJGDgHTB2Ksqv9CTYZEtq56vgv",
  "key17": "ieYfLjJTRee6Qpry9ShmNEUjJx8KCsriAkQX1Uk2SzQfeEtrqaYsHHypjnUXsjxhanBWjGsxnbmf7Y7ZMo6mgwG",
  "key18": "3wos1k1PK3bFWqKdErCodFA5TsBDGqaG9AmQguwxHb4W8H4NDqH2bFUYrmSF47cp7fpXFeVSq9c17TTDgQPg9M2f",
  "key19": "ziUfq4Zanqe8JermXkRx3Paqmx3cCcirLtGJeAkJTxEMfYDh4f55RHekcFytMYgLVmcX8wCg8gGAiHmJHdaKbkR",
  "key20": "4AVcDYGC2xHntSA1owowBrwjEC8YVCuiK7z5pUdAcZgGi79db4qVvuA7QWVfvR8N6byATRx8K64AnqJ9hFGDM1Bd",
  "key21": "3uHvicQjbDDL1rZZJNbz2b77rYpnaMntnSYskAjKLTzts1XLYnWaUhjpph5zUuNxezpjrNK9L9xGQmQAENF6W4Cd",
  "key22": "5v91fjV9xHHYZgbURCJSNZcH21LG3gJ4HHZs4BgH7n12WnWXJHmMJ5jRzV3xPkMoYBfxZZ5rcrboAcxHVu6gXpYu",
  "key23": "3RiamXa94nCWgFvzqefjTj2oXWYafoP5vi6opbMNNvPncHhtTsyGFa4KXKjcuiD8a5bKtmztq62MjWZpo5BBygv9",
  "key24": "44y3qvGpiPfvR1sEdRUi33ZvUGb1cFJVGx6QaquKZA6mrSjoj6Yumnh9GToEt7fuPySVGjRYKcQtQRubbU6mV8Up",
  "key25": "53nyABTgQRAT2MaNZJXRoSkQXRZfSLkjxuSk54sj65hxzAK1vEXHrih763Hcq7gtKDiroNv3yKjSWs81DfTkohdR",
  "key26": "2Bi1eo3yA26cNw8gZY2yjAozyK784k4UprkoHKMGxRCUFb1doJdAfVJqNayMztmxNMEFr1QtXwMUMF47p2nfYBuw",
  "key27": "3tc4PpjgCVTq1ULRBrryfU1VZnCTmeiw27HvkvjTnvcujg5kKyLyDDV62YmSMjHAxZRjnWfi2qfL58ghNhCd6Rmb",
  "key28": "3R32MvTpbCadhdT8QmY2exS183ox3FjskCQ5nKdqfsWQebWrZcD9Rh2r8xoBR9KJZ3qFy2ydYpdojPp1KVRJLjrR",
  "key29": "26gkhghdkiq6CqeywM66dhFthrtDZnmHfGgpoPSUXGEjD2N6pY97GczG7VPDW79m1kqUzYztUHvteFHwPrzLuYFo"
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
