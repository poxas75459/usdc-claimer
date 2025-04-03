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
    "5po6yhu5njWg5mo2frQo9oGCR16QVGExJABgg12n9c8NYt8nfsz9EY2HBcGDpo1aYNEcovW2LEw6vMwp7Seafj2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rm3bharHHdpUmjDAH1vt5J1jqd4pZLCdNNKFggtFUHrnby9XaPa9WW8Mh7mNeY5HMCHrHteT9Z1HgC8uRsWNnCs",
  "key1": "5gVBiX1AUXXm2iTNosTQ6g2Tu1BwUHRf86sduJBa9qHr2xERLy3GTVz3gjPL3wDr3JYPZaXfeDJYaYrYt9kJK8Cx",
  "key2": "eYyEaLXYVpLxF33mKGcy7UfdnLDGTDgdu94FuoFRJLSsGXF4fYMxdLuK3amfWfmZjVaHk5Jf2P2MeXMjxSBVYAX",
  "key3": "3hmMC62y5oRAysgtxtG9tCrLBxNYtBfvXSBRoJXekVHcP8EyCku93x4BSWQ4BoG77SnPhZUChqjhzicB1emAdY1L",
  "key4": "4cwz4Nn8cfZk9Ytb9A1znrxSQbJrUgrNGayNuT4EpAhDZDaRqdMeyc92Aub69B1aCALAPBJzdMohLeQYEtNoPRQr",
  "key5": "55eV26kYVcCEL7dchhKhGJETupLX63NCe6x1Kzo89yS2kkNS7SXjUrr9T6KujY8CqdnpZ2Q4sWxggcgVq3myFCHg",
  "key6": "K7y1y5kaqJfs45gA1bFfprtLy3aTrqx1J3fp64xiQRdzDRPM85sHXUpZFrnJSnRX6bZqHq4viTGnwCFgV3xkb1M",
  "key7": "tTgVcWWWYNG9TGs2q8zDuoH3WwCnEuJ3zc1oxiLbasUX93LpBUqLUKLm3xqyQ3AVHghkrdFDVT1WFhTSVTfqE9E",
  "key8": "2dbdbhHNtHjaHc1uhCG4dRaBhrYNbcgsyvvfT3qypsDDTKgdh4Jwr8byhPKWRWv9JpYVPK7TkH5ysrBBZA8eyn6U",
  "key9": "5NpBQt5sUuuAMdchSrZoTj8ApYi1c9bccjyBFLEcF5oABSc96qzVLWSYhrxpqfXm6yo9b3BwfeGV1VtAVScZcoYE",
  "key10": "draaqPMSiQW7ksq5EWwagoDHcseteMNi9Hhh83eFEsZ1nXbFRJ7Lqpk1zQfbxqzZFcoAzt8Qve8RGKLMf3DS8sW",
  "key11": "3QTjsnHC8JmaHLqRhtYfNmymV9626u73UrV4n6UujgYMEK2eZGAWh5EPzpLnq77iJs27rSLyrxdwDZPPrziVB4wy",
  "key12": "3rHxJsr6gZPTeWLSmsxyHYrSupU14F7zC4PPdAbP9r3zfm2J6Vm1uh2KvUcrei5ntm8paAxEFn2LSkQHjAPRZqv5",
  "key13": "4QaAWyNNQBXZKNVACt3kcKQyc2m9SDD2ncsQprMVzeZfuDn5huKiycVMLvFwArq8kmuq4LZNzLx8nsNDasALdrXe",
  "key14": "4P2SKm6yDYUcNizcuiSRYSrvB3bT1H2ke3fyotoj1bcYE1vn8FnXSD84HS1SSe6f5biqkDJUqdCwVH4sPGdLcbBQ",
  "key15": "4v9ZwZwBcCqUy4PhuWTcJB3FccJJkYB1vP4cmzA2Vco3LEoMn5WuLY27PT4woR9zX45TDuP2d822R2FCX18HSuPL",
  "key16": "3Srx4qcTELVhogi6DZcTCZ5j4Uh4oAqRi3AFebwC9UpPH8eUeePRwxBbX6LGxFJbGvNc25XsimmcLmCQjJ6r7gCY",
  "key17": "5VX7fUiAb4ehQZBjBnKbriUmG7RkeCLHv79VUzkZyuygWpLoQLjQb8sHztHLZ6juXEQYfSyDBhnMJ87y4s443wab",
  "key18": "52QtjnNxS2egUQ1dXA7ESrUtMK3knkEw2EYEx1EdbGNa7eesZgSbKRAhbpAthf5JwcHZt5GkrY55v9SxNyi1zgMh",
  "key19": "4rzz8Z9e7nVCDTifCbeugezardkor7Fu9LN4W9rrVCmf8oDaqyW6V8X1bo7WKegs3FirwpPYAW1ZQF2M9Lt9p1rg",
  "key20": "5amwE6tkZmQ62vzEPjfkF3zbRM5ocETRv2q7VSw8zmRNBFJFj7JYEihp5jKbaWNvFCzRwHdSf6JTHUhB7KpZ5Ehn",
  "key21": "4Q5Jx2Kpbgexy3Hox27bWMRFW4etYW1f1a6A9VUWd1AjqXDR1FRnPPHvDuRpkkCXPA4ydpV9GEmQWHo3XD9vD9PK",
  "key22": "3D9wusuvJDyrkgoYZXnGL92TpTsJjFFSFu4pjLKbUZjayTw2ebTSy4gQ2VM9Buow5KtBAanCVyREYaDsZTbK5a7o",
  "key23": "57wtf62GWmC439LfuhxqzbnWgeDLw9B1Gy9vpELvvWB6zFa99BNgC2fLCRpTo1uEmHBj3rmYhbgrAPfwFZTeSJyt",
  "key24": "4sWLJbVEDJr6ipygND57J19X1h7s4xM7t4XDpoSPVvhj2gDBQzcrAkZwyuY7PE9AgUd4Wbgi5PZLxVFPh4ELkisF",
  "key25": "5a9KgGdGEkXy4kKt7HUEAgLsdLiNDvCNMoRGeLptrGBDGQYTY5hoL1Uv5rWdFnUbx5hHTk8FYAHDKDTm4zknyXyN",
  "key26": "3CSrzjobJLQVbm2kVHXFn6UxEX2ho2ZgRfANdy7CG3D2Uh4HqUpjSgnttcMMHzMLuj6HoKkfcXgk1yqiocisbjQb",
  "key27": "5tJjeb8uZD2yPbErVAuxG46jteFgaNgygLUMCDewc2FPL5fWNR33wqVSJ7zUa3z6pVaNEj9eaa6dS4mLotV3K51N",
  "key28": "MAFpVaa2wWdcsS3ej4teGoDMTzJJgYC66UERxfyBfUyqkXaMfkSjceJk3FgLCLM8DD1NPyvGzHtPbKMqgV1A9cq",
  "key29": "4tk2sFrjyJvdqCMf6mywsHbLJ4ETcATidLxudfn3gPMUST4uw4RuiB4kLijQDvBbZeggkBGdTJXeWhwdodeF7TcG",
  "key30": "4ERLvNU7a4wRXrwKH7LbPv63R84po93E2SFGXRAYZJyuwzdwDzPfyqFYUQLEpEfd39QrcQVzySFYBSbKwiBNCAEt",
  "key31": "2CSFesrtVFhkgKqv13zoiFvz1NuKk4x5PRTLtutwHUV2i5tj7DZXPJMwkgscq33hJZ5G9yg6XjhEKaJ7KU1AYQrN",
  "key32": "2F1XaRMom6YrHvvTYwfejDRwfNkt8SrDt2dZ8AkK68zTuMsm9is1MSxjWUiLBiiXF9KomG9k9nf5LyCG9gpH7Nhd",
  "key33": "3Y5qm1oxfDaeDJM5ubQHLhT2nMtFVP8fnP4nrs6WdNzUDgepjBGVJo68ZVHFSv9WLGeg6XRANSbqXHzw57LiLeb8",
  "key34": "2SRJ9fcnFx5E84e6EseVQtRdh9X8ZADYDTsLXybqSQhmSTHjn9jNYuSzTRRQNxtUtk94Yoo3SKBHFpiHNZGr6wE",
  "key35": "37SqHaHj4LZAyap1F8pusuKuVZCZHPhf16mKDWrqWSinxFMd6y21bXksYLGCGrMMD91fYaLD5s6iWHb98JbTnsZC"
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
