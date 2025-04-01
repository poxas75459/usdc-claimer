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
    "61wo1t8d7eLoXoXBsZYvHMy4iju6paQpVbrv9cMz1JDfiG6LZjQ4WpVhsGEqAq8rcMLsoMgBjC4xuNARo5M9oCDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XG41BLbHKfRAPem5bNSg2ndaxgTZDoQFnzBPhRBUTUeCp59oGcGA68J3yzpvXJUNDCYMNpaV2j2yLCriHNbQ8qJ",
  "key1": "xLNnYeQVqwLwVxVWyH98EtPqzXNGnKPZkfoZFLfBxCZeP6VBdN64tm3uh6jU4nHTuGVevktoZS6vDDJqcJL6APC",
  "key2": "4avN5gVDPu9pGKPBN8YD3sXree1Y5v9YjDd7PZNdnqGkGD2hLKbBLpwqk9FvmaJ174fJojkXob1JKfHfchJUyYJ2",
  "key3": "vjSsSe4eV9tkEVMyKqhNsrnXV7DnifTVGsmcX9vBypdJbGS6RVcfFLPhgm7pXBQsF9fe7puXMMnjjuNHu4S4q8A",
  "key4": "3KBvUBhRhpgPAK4Zq2JTHDaVQjEHeJEjhVcQwjpWZFqVCxeEL1Lcsue9VWAVGRphXjsZUvXzpmZ22gjKzanGdVUi",
  "key5": "4kNGm2tPZTYtBAb82HsaKRYijpwsgCqARrusuNfsyBRaCnTmVme34aJSSK6exheBTSPiok2JWKjGnBErATaJsGdU",
  "key6": "5AXaNpeUdKM7N4L2guBSt3m1Wn26vhCUBZQ2qw15VfwWL1M1a9UDtKC9bEphTqo4kBAUeVQTTG3Qx4bbXM1nCsTM",
  "key7": "4yaeE8c5EJmyVX7MNHVBDC5U9shsNyaKpjHJaYAr2ww3V8DXnKnyk6ok9J5cjQd84pB39NfxXCWueYDMFdSZvxnC",
  "key8": "3axsgY5eJqzDy8Wz1wTyiCaP9SmKw9PEfTMP5QRNAagZgLwsK7Z3MJdfYxXQ7DKg4gtYkFjvHUBBWYtgU9EWXK7G",
  "key9": "3miT6xWoNrSYQC2aMUoMTEcqbRydrCmUSvk1rqYtLqnbUnSt5D6NQHAXe6MVPPw7EMA5gYb12XuHiJeiMtf4N3LJ",
  "key10": "2dB8xcDz74zj2NNSkRM7uW4qTZTqfVjpJcrfwbPoXUJfvKHU5iCRQENjyhRjbVdMgfAbcYWh3YmFfB3qpvNQZYkc",
  "key11": "4srygguKwjAArSSWcYePsy6xJmC5ghGZ36wwD8XgLwwceJtMqEd6vvHtroPKEa1PjYqU8G8BG9SM6SviZYBpRCQG",
  "key12": "3Jb1jmBM1gmFmSyWLyKRMcSmfwzGRJn7WfU147Emp37Lgzxvpd6CWrCd2AM4sXxSzFdQqeL9TuYVeZ1e3kx2cFTZ",
  "key13": "5u7qkvXaV9TK8bioNtQxj22VcRyUx8csdHXb4iXpfNjzpz693c79cZb97PkqyiGWHpPifEeCmEpVxBTZSdbtz3VV",
  "key14": "KPJZ5aZgr5PfBxVaUHB6PeRxeHJgZmjJY8YFs52T3ngLYBdEmhPsUTLr1CBTEDVsArQBbYorrwjBmFSRzMG2Hrt",
  "key15": "56dfQRPKtmg7TPci2DbLgxVeYmKNKFKvFHM2jxq9Crr1QBdTWWcaUsEfnjMubkYKk4DXcohwvXVrGmPFJZRhxQrw",
  "key16": "4rcYDSa5bf9i8MY8nNQUQMvWbCCDmk4bpeiisvBjPjagQEMkeLS2E5bP1JmRYGrui6fNUJcMQj219sps9QsafRP4",
  "key17": "2QW6S1LrsTVsi8XaebGFUHcuiLGNdN37S8hzdk6jnGqyBNV6bVzu8A2zYDjJK8EyQpCyjCer6ADsi1uQPcBsYfDe",
  "key18": "56Cwheqtm5w9xpva61dS4Dty1wXPtkqW2NKEUXbNAu7n34jybqBmcnzBYG7R4t5fRBV6fVHujKYPn4jTY2TF2PUx",
  "key19": "2aP4HHKddZo4kBT7XVkxq7n9mxYQn1W25r4TbcoWS2WeY43h31nKkfnQfxtfntBQrMtyk3VNf8NVNtTAyexp3xHt",
  "key20": "3c8mMjVAoiXAeXCBXzdZmnFSUq2Rw8GouF5s2vECuvUujqoeTZa55JgoXsAGvczeA47bgVedZzLnPCkuGzJS5e99",
  "key21": "3hDSyaoUCxTKxtFmimCXnnC6U3wUPNsajefRB64miNYbg3bRnavn3Z48DPj3QBphm9rPpHBnW41VfiqZLoiT21Bb",
  "key22": "4mT5hGSrbncix4DLhU9sxyQmPbEjGGMRHSEc5grBrhmBBJfRYEAvrnjwt5uUxYsDnpPis4jiFyd4c3Q8CgT77Jqw",
  "key23": "4DpVka9ToXRtXodx4NNFtFnCppUSRLinJmzZf9Xtj9gdGFgXM9GdaaEoJpaaA1rftiiwAgchqfdXBj5ANhDARHvf",
  "key24": "43jGUu363f2YWXe3a6kbLvFNAXNExbmiwAyg2JWxuDtFAxKojJ4DDrBfy2s5w1BomY9PpYsygB5tUv7d8ecwfqY2",
  "key25": "3LHj1JBs5xCBRNCFnAqM9NeJLjAvzcrwkHY2KHevwFdRQRF7fMSorJZbe5DCLcGgPrQemF72E9ETFG1z3RxzPhjN",
  "key26": "vLMq9hJeNtbtbq3hV6cw5tVgybG4G5JnvZcfEMVu1udDoiGKVpAjeWzTmE1hEy4kDDGUZBciXnzeZPyc2rSWQDZ",
  "key27": "tDpSwhJCJ6uXvMwhm4SYPR4eLH32wR39snp7144VcZRTjKiVvb4Dnkari1Pr2HexhGizqYg5c4jDzRvAiMTz8FH",
  "key28": "3pwxpV7dtPNVH85yq9Ue1BvQtFXtDfcH5zuVpz7nDzCzs45T6arBHJxkCmxFxo9DyMtzL8uD7EJbefrmr9EEwzjD"
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
