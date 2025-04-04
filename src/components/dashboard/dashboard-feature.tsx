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
    "mnqUXeoxteDV1drTCsPJ3HnkrbNbnZH3FhomLfx8tpPDK1gtiX2nHK3ameQqmE8srJif1zPZJUtQyGSemfHsqHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LkeCyXrnsr1qadWs5asbVtMq1BZESipcrv5uL9GXKfGeue6MB8fxQ9dCGUyNnVMSvDjRSJgFNkq3nYzGVuSzqTq",
  "key1": "2g3osQ2NpuiFoCrhUyU4pqY7ZGMkdLtnvDutby7kkTjsJqSgQNYizr4fKaDLB9GDQHh1h1CykGay7m1HmZ3SiJvu",
  "key2": "4VNJwUpptaG7ywqg8Q6SPmDVyEohkNHNGLhosY6guFaMs5W7N9dPbnGh176NiXzPzbRwvwcMqeKs1oGqRSnX7KHg",
  "key3": "5gX288KCwpab8N29zn4AGxSW5NavK2UBPHzY7Cj8SuXWDNHj1nkpoNWGKeMBVEDaq2TTgvZfa7f12Hwzkcu2UR2L",
  "key4": "262Avfucr78Gicaixnofx8pmtJy7Z9b7mxMo2dTSd5usdBNsrMvnjoQEQwnbPc4QYat2FtP2ZZ3YaLiwwv5cKYn7",
  "key5": "5KteoSVKTJgpwMXMzDXytbbgM7RTvZv94upQtsmZoAB2wDPRoQjAkNdcXc9b4FwMXQhxtjZmbp2LWiWthraPSxZe",
  "key6": "2gh1iHXopMT2mcs6uUfeMkA66E8pNt8zBgpzPSKejrSs37qdsT9bc9HzZxUKrATFPyuShPip84hxtcBNnQ9wC4w8",
  "key7": "b3hFeuCoPeiD8hkH32yxd968Kz7zCvL9dtU2y51fazftPpXcWUCu2S7MkikLXrNLxK3BT1i5QAARWwHriN9F5KE",
  "key8": "24Qefpa1iSoGe7PkP3KTfDgDSjAGWEmYwyhSTd1mBHnJEJy8Ph8MZpAbbr7RFF9nHsKibgVjHTd8hZcUCUdqCkLq",
  "key9": "5UtrrLLxzdAWgq7ZL2KwzewDQaaAe2bX7bGa9doC1FvC5evvpwJw7BjL2uadeLEX8VJgtKN7sW3jR1DpM9v4raFV",
  "key10": "2wPd7AjPQYb231vX3cX3mKkh3VY8Ny8mPh5Av2SYGZwvwegP3ZG1PCGfzcg6YphHYhcBu9KoJDLb5rf8U4j2V818",
  "key11": "4aqnreFoW63TANYCdwxQhXf7zuLiLLAuMg1WVEmLmB4fXJqZA2iFtonpjQEhUVJ4x7n6mynczedEMUs5nbiLjHbK",
  "key12": "xa3yEkoxUQMsWEFfxrZpDbzmYCWRfGe6HuVhbi9d1kZSKc1KCinBfMpDXZm6Xm74B9xvfEKQf5QyHvNVCdizyX2",
  "key13": "35CYLPTWh22aS868m9bcL9Y4yQUqVnurr6aUZBNe6REUqHRP9m7KFEZrdC2NnJTEsBP79dxhF8PtjUBsWUTS8R5Y",
  "key14": "3rH87Mu84N5sMTKYDmwEQwWrjcrnDvisdRXTapCUCzhb2tk5uCMjZzaXnAoaxn2heKowReEvcmRVT9Nmv2LDmzkB",
  "key15": "28PuSVS8ZTrZ2qMALpfNaHUdrgFw9H6wV3s23ZNBy3SMMRETAeafYUecqdi2ecmWgxDDtqH125oBiRRUXADmTii4",
  "key16": "3s6HT8n4Pfja584Dn1kCSahvoSPLVB7eEcTy1Zua1ZTK3L3BVegBeV2rz7aVLVGq2o17a3i6BuvT8YonA2i7txgG",
  "key17": "3sifYwtK8V7W3AGyP3xvy52xhixUaY2WMpCKZaJivSQ1AVSqNRHWH7wRoUtUUMdZQCrBZm95ZpDzRFzfsc8YWof7",
  "key18": "5ZadJ9Vz1YDow6KJXMdELXrhj46qYXCSavJwqGhQ7Sv5MmHX4hwJQ89XYg8mZSfMwn6t6sod2eVpNX4ZDij7wap9",
  "key19": "y82n73UjHktC5NyBwTqXmJNujK2NSHunFFVp3Eo3DFQ5ZyrXSFUxqtjm9stgaX2Vtzows3FVVAHSKKxX6A4j3gz",
  "key20": "2HDvJunEicEofocX9Y8Dw4qzxW1phYLrVbLZ63Zcg5zNVPtkMnxjwNSWHfVc7ntZ6eob9BYQsMthz9tgqJBVVGkg",
  "key21": "4P28jcZN2FkqakZikuRhrjWBh6y11F723yRY2qgvPRsiHngW1WxWyFMdQzPSTSNeZ3SNiqkVz8S42fnznip6ayT5",
  "key22": "3DJENmwKR42nqBWTBSqJAQtBmzWxuDjQFXNGbjasA6zQRM5dgNC52sGhADYt52oUw9WGef5R4c9CqLLPeSZ1cYWV",
  "key23": "3drtrzq14vQfe1qWxUqVyeK8ARjnnqTxxBtMDG5hs92y5wAtmy9mv88k6HSnuAw3kn9BSvkwrkcZC5DddpPy4mxX",
  "key24": "4QRYnhU6SWwkkqG1Jv1kuonTEHBDjhA8uD7BxnWntXTrE599976LWgoV9PEgTgGdwuGEZD3edsLCeQo8mj79ZJjn"
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
