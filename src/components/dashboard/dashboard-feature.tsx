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
    "13qeXYtZZNL2iicUokY2Xus5AijpPsZth2dTp1z1LyjBLgmS4Y4fXwbusrg8mRn3uUueQ1n4i7xnG58BxV7vvvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCBSYSKmBHgyMoNaVwWdcec8wGEvNDYoHk4KShxg7ZwE5Dpx3eW2HLor7AnMuwYrGFPFugRGQMNMRb575ANZvXg",
  "key1": "YmVnnmkkmYWHqdHyPRnUWqGASmDFqbtafVdReTLWkDTAV2wvwQUG5PenyNVHgwPakGgCppQfbauAnMCavWXeRtw",
  "key2": "p61hmm1pak2wryVQHCncCKtPbqvAP832w1XdTrLF2oHDwiBE55RRPSYn57kUdQJDnwU972Y77oq6D9NYU89GRsx",
  "key3": "3T1BQXaAE4kuq4tKCCBw1dBpf4gK7j8siBUUZQQh3azMpX2H2JbvP7az6Dw6xJsmsAzJo3JswVyZxeBKaDK4u89M",
  "key4": "65gQHKZ6ssTcLZVrYad2NNyYohaMLvXEJmrkyzd4uy8md6dFfjcLpv8WUM7ASwCqM8StPdZcNAEJCpYwKhFCm7M4",
  "key5": "4jUze7gzv6RAM7QKqwmYgfDxVgrTvDCLqwwdcJ2cCdL3VH9VPuG4XKn9MPafskfeqXuKn4fNb2FG23JAgjE3c54V",
  "key6": "5SRAR4WbxuVDZWYS1G11rvX6xNswYuVkDm7ferGarGeqLuJAJEuk14SZvwDzoU69Ri4xBeugxrdCGuHCw6Q6S8KD",
  "key7": "5kMsuEaPSkAUj6sEfcEiyDruzkEkpSEvs3LqZ3StybPNc8jdnwnP7ckc6PQKHtq1o1vAVsXFpjsfY2ZLdjx34b4X",
  "key8": "3BmMxF36emc1N3wGfGQQM1H2w8qG2KJAQoibiaVEop6xFhTkBfDib5g51ZoFxPX5V9wZAN8ZF7vfTA65wRSBWNep",
  "key9": "VeBHgV4RQLGrMzWAsxYgbWD9xRFxWjypLJGYhGKGeGi2jy7jomaB89QCqrAcByAcHa2RSAQ4ecS4U7UkiMUnRUJ",
  "key10": "5RCakhKLgKkDJG95oN4zi1Q8e6fErrurwHq4MkvSZviBfNdunLFa9fjUhgQCHNkkXcbafec4tomkC4RUGj9UAx5p",
  "key11": "36xRe6QPWFyvi4Kr4Xyd5633j31sWdJB1BCGHcu1YDUwbCpi65RPCrHB2QRWtfDhSTnunHTqjryvAguZeisfWSxL",
  "key12": "5YSDm1Wb9adYLC5JJZQCYEaZyaouEFyJ14yANPR8SWoFPzLxwhG8E9iMyD8RLakpDS4wTAf8SFGnbN2KBYAxhogM",
  "key13": "5xcNPbJpD4R1bAHX8rJq1m8K5WCuAj83t8etuxd69PcyNW1J65vZ4V5jPAEvPXE7m1TyZwMAiBni5F6CegPm7BBt",
  "key14": "4sTBVVJib4aNfEDdfaZsgo8KyE45ngH5WKsg5zqfFKWcYF8cosyHDgonyjBwFdMj4LDE8mQctuLzipwztLyDAdZN",
  "key15": "ViHqaSsdfKFNFdFVWJgqwmJpL7sjcE7jAydCB73MS3hFVn1qzyW8yyzETqmrsSQTm41YmLhZYnYrqyNgSuPnKPX",
  "key16": "2kkEWxSWhL9ENiracxRkbXQLesZGCPJ5HFdbPrx18Tv3xiFTcbGgqCf5GPZLgpGcSSSni6aXezUQVydr7Z6sZZso",
  "key17": "zzxGrHkAnJ47qRPU735nnpJW7owSmNJuEHNup4hHQcF9wK2mYNzTgjMcECdMMgc1w5NprDAzrqgYMkfpN28ruSh",
  "key18": "3mRTiNLP19w1qSCFJYXDPGaXgcCEcsHuPua1eXo1AUoP6op4L92BDojyrQ51eGppakmnbzdQgN9XPG1YL9RM1c45",
  "key19": "4nBBTNVrdYcCfCLx1F43FzKqd5xuvmtzCZqQfvSZ2vfBaKq9UVe7PoDA8j8YJGhByRaQspKUrYrHUMZTniMqDaAp",
  "key20": "Gr2Qh1asnNo25qckmEoBYSeaCiLeYaWGZjnfRBxP7h81usRS9Rg64A6wgoQvTB2Ba32fw8PF1tnZNyn8hpCDNdS",
  "key21": "QaDzY9jk6UvPn7wdwgaG8umaQSZA7UB3zMMSGWoURTpFQTNi2wD724M7rAKBosLVLTDbe4XXmTvPszghcLVK2qp",
  "key22": "4WoaXLgHv4rsdnKnw6B11AyD95sJYeRij2WK19SMRgA3oBsgrnuKNNN7tvtX7Pzvj6Tcb35A4hz8Lc64i9B5KYHC",
  "key23": "5yv7ZR4i1X5HCRcBBEF63ESqgoUWVXBC9XSuZrxZQ7QPNjKLWuDYnbD92PhZZyy6J88b5diMPozzTmuQV5YKLfXc",
  "key24": "2nDUbBQ59HYiptt9q9UCEDx8CBeX43LoNyBiiNZgKim5ww9eRGwSoDTVaEF36smoJvRQ94UfUqxdsrRXZoN9vFKY",
  "key25": "31JLVt3iBW63qxRA6bEYdi2K8mXiPQB7FNRDHf6EGnw67sgAVshZDwvr2PdZryKq3siRRDdPh6EShwANpqDXPFfB",
  "key26": "3zmLvzo9rYYXWV4uyTwQfu8Ra6uxW3D3siAH3aYsVtKRhVjPqFSqPEcjZKSk7MomQBpoeNe6A47K4Gw5UZiVjrpa",
  "key27": "5PpBsH7B8PHfjx3BLMY41AmBurnhrYXBYRQJpKYtXUWkYcaq5DfaBGk2utFXh2GNdDvddanfuwqKioCkjJrs9xQT",
  "key28": "6462hZfMcx4biSAsceHh9mUhwzbAGubojCgS7ypU7SsgfNwuowDA53uDSVHcfQUzyTsgcpgDvxCEo3YXvdZ2exG7"
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
