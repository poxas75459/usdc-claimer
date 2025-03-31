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
    "kxiA1cQjcEkT7nv8sEURKKgeaYjBYPoSuD2r46wGghviyX3rzA7c7vNadLF1NKkQQF9jcupBXc91jF2Ff8vc2uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adixwjyH6fSLNz4iVQBJLYSuCtj39ceqR7udk2FtDPbA9UM6vTr1Wk2zusCeQmtW1YbBDXAZ5yHRrmEabwvP1ra",
  "key1": "2i1QAvmgTQkaZmgzdSkvuDsphEm8dYmJddJk3SVqytinZ3m1i4hsdiq63H9hvcu15csjaLk5wSF5d4ihrYNKAbu9",
  "key2": "daZDTXJfKJ2Sv9NK5Aco4zNbM8L74FuxCKjCeF6UpNLXc5YV2LZLP31vnXYoFxo4UeUJ1S57hMmnGw1h2teR75Y",
  "key3": "2jLKa2rs1HYriS4dARfVRcUUNkatyX541J8Zfn5m83fMvCSeiKb6xDerVb8PRhJYpZruBkv2pisrgU98zpDCM9ca",
  "key4": "4MZPzLQxr16B2myAioqC9V6NF7BXnLyzsUFGzsUw58UyhiBv143g6DSTuSvJFoVPgw85qMAQn7QFWKZhX284cfe1",
  "key5": "43hkg3mEArKRCYiQANMSwgdUPytL51g9MuUaDSUipQZvSzscfsV6iXvUSLwZf1oQxHtDe8anNy8xMhDQeFswRJpV",
  "key6": "5n1fsddE6fWY3Jt5bywpUXMP1YcHZ4PJW8QvcmyYRs19nZy1EHujHusyYEybPv7koNvMtCAY7y8K9vLF7Bn74Hw6",
  "key7": "5iLcS9TU7EjTJFoScJL3fBQZFNabcQgXW9Jd4kiGTC2yGpswMG6gWt2hgmrf1w5nHLR8wd8Snd9dLEs97exGfLJR",
  "key8": "KksCTt9YY3wPBUrwXHuMZm1UgRrTidYV6NtStq3XmHWuhZwmaQwZa2q6cEuvSX6CbgfMUySymRPA9SR5ViAoPEA",
  "key9": "4p5pKexq2UEfSNKPwWPqCR3bVVYyBPnHMteaNrKZTzFXif8NbPxEA8VrT5ezJd4hryAHFMcvBP3jc5zAM7n1KaFJ",
  "key10": "4SKes81FrLtwZDFRk2euUp6GN2eJXXaMUwcCDvtV5UPHULrrqVeT6SuzAp5HAoCGR2fBzAnpKGsLtKHYv7vdQLdB",
  "key11": "2jcXAJZw45bfq4MGwhVnog5d4qxQ3ngMRkbK8pp9J5PD7MNiEtkeLi9Sah2yHETGLx31Q3RnhdBzwZShNCMzkKmG",
  "key12": "5rS8yBb1ALtDPviLZVyaH3Yup8TkGnUK4EEHjNn4hBBkVJnKWbhTLbLSAnjCZ9RuzePLC9jn1VodDwc2R8W5tPLP",
  "key13": "58EFZZxjXjRrrczuDZ4adV1ED68zTKmpMCWdFVAj6PcnUp419MNDNbVkb6KbYVUpJPaz6ztto8u3LwHnucdoykse",
  "key14": "nnYcro2tSDcZDtMvQoKbvbUVV9mJzVTcDiXsRHUgZqKRRKZgVwQwHpdHzEjtjuYuHxiqeTygRb3mdoL3D4F84B9",
  "key15": "3Cn3q3mr28Mo94J2PLkRPpN9CwXcMSHrXkTWMV55KqL8hAqK4K1XrUUWzZk74SJD6MXAEzTNVQnzVffSvBWLFott",
  "key16": "2hcfARUDdcxrk1A6ghbcpmuNHoyK24qVHSe9TPdH3c5o7F7kVJdRY8LY6MuoqPF3FjQKxprs9QTtZaVSkefKrpoC",
  "key17": "2j4QsHMSC4znHxCDc8eTwPfkx2TaDV3yicyJR32Y4eAgGaobznQsRKHy5VZ5oCHBp6qi3BTKHpW4mfp2PndU9NfU",
  "key18": "2SzmEUTZvovLXvMef49SUqnLPCUF8UVqzv76u2XG6ViSiHt1tydV6ZGGjAngygLGpo13qJ8pcJ4EswA9JWgQ6qYN",
  "key19": "4VkJMMfA7JH97dPp2uH9B8TXYzkdi7vAmyP3tzN9F3hSHZgX8ESAbftw2udsWApLN3c6NDX2M4VK5QkUxjqKfzMS",
  "key20": "4Lun9352R2LeYV2SgMkv4rFxYjaPoYoZTATxm3At4ErN5rjidBAM2fNgG8jPuKFxEmenDAceM8eiKNxtiurWPmQf",
  "key21": "3K5CDQ6A9r1nRPNctBrWzSMHgXrM5hA3pSAYRCT16huGkQQmPZFc1QCVz41JUss41M7wuPJsAvhWHEGRq8obvCbn",
  "key22": "46LuRD9jEnjHmNignFk32Ls2qXonfActBzX4KwT8eTcVhjTsepMNGrQBUTLEeUkUJoGTMVbYhgWt8YEm6n9jKhJN",
  "key23": "62zSWWUSW8YBjQkiTuPCUdA1NVKNromcBB1PqAujZ4jneG6bXKEYpztf8ta7zy5qj99rKYBeytJbKYdJrK7JUPut",
  "key24": "4bWQZQWg9hkgCfbrBeSqdHdL45YQsb6QavHvj6sN6CJoDPDZy7BgBCEsD7fxXSqnzSUX9JafGXkMeT8C4PkZnzJe",
  "key25": "3VriiP6y35G3qwShR2YBCNXkRvfPuz4FepZbsgM5E6wAPKmUV5sBxuysiSpRKR7y8qtEnnau9rSu5JpLsw9AHN5g"
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
