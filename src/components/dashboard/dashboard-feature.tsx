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
    "4muwxziTKDj3fPfVact6GE8rpZpxkdurxasCiGyd4CWpmye6cXr9aGXUfafgWSAeMjVVijAPUx7CxsDSNL8nGr6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33E8fztkXaao4fxPvCFtKr1LDJBJUj6tR8K9MkPQjpRSwnD1dZ4dhQd9b83EyFrUyiXEveALzCwNdJTSA18JUEC",
  "key1": "SM3VgBiEEb964ymjPAJ8dWwTauDqyoA8K6WVEbgjphmnwzoPqDMj6yijVRiikp42h4npGRoHrWbHazh6MTZztEX",
  "key2": "dM5p2vFqahCDqKxhum9rfEBfMxPAdkYNyJEAv72GE4J7NXEXPwgeCNWBByucWFjQJAx7hNTTX9MTDYmeERc7snu",
  "key3": "3LcEFFve4d2YM8LUZLjpmqDgbm6GE8tvHnnSoNhTzo8QUpjPGDR4tn1mFz1dNNuqAChFn2jF6MxSNXQ1vWJL3b4o",
  "key4": "5k45XBmWDDXhwAxnkYwCgbPm2CKMKogcJ6neoPPVLpEED35pt1cGa2x3o3RKK5et7MQog7WQBPjE38E9QQQzVgkd",
  "key5": "5BYq1LSTLiAw1f4GbqCdqiLXpyxdqLErgLrNXGPRqcyqsxZZaPpk54riuLBDCZ5nerWvK2wacLLUm85sUqxc7xJQ",
  "key6": "2hgPMTc92ZT821J2PoFTXEkwLLuZhGZ9s9TtYKv3F18XLeNf1i5vqr6GaeszafTuGRj5GFMQRkvKMo2mdkv8wgzA",
  "key7": "2Eb2zz6DvsJ2ix2vqibrgvvjP3crJkSd9DXttQwgDctLXogCjZT2HAgGZTnaPB2ddQM933UU2xqbYAGNgNYQLAgS",
  "key8": "3RsS2sbv5Tx62iqq1U72cRC9GiVGoz11fEAg4MjCcac2JqDUwbiZFmcEgircx4fDPKUGpv4T8JX7MZzLqN8i4pJT",
  "key9": "4QAdofp19ioU2FsRqYXbisW4een1j3AjgEeeUR9RLr3ZPPHhL1MdiMwAZRPbzfSKmBqVtuCJSRouPaAF29XwsiUK",
  "key10": "24mW1Z8gaqyR4JaKNPe7ZSXzdCHBX6aRiFwL9fNiuHk8amz8vUUZyfQ79JfX6k9zzmMvtQrVKr7hbSvqoqWQ9eVW",
  "key11": "4b5XhAfvaWtgEkNDK8ZDfhSSH8cmiQE4aaaAYrHDivxftYeXsAUAMjCZBRXPkScE8Z1MEeK8YZnTPRcECqs8Rqko",
  "key12": "BrpwbS15cxm4rXuLcZsMFdAsHKBAXvGtT57NgDSxTfaZ3o6VqHa8rijMd796bcDk2N4cc3Hvp8W5ZnKfpcYrJDK",
  "key13": "UaodqVTKv5c2axD6tLoWfJNdhCMLzSxpR5bxDZMgdqjewTSHHrH88o3i9fAiaRGxqWj34CEs64sqB2auyqDi7xX",
  "key14": "2cu689G5BWhjBK5VDTX1tW8maZNotxbaLKrpXkAjBYmbkCFu4p3gLrbPNZzUA2APkAR63ar7rbDsfeUdrZ21qHRU",
  "key15": "2DZDazcRWFbVEbLbmjV1gSdQBd9rDLkRcbcBhrf5nLGDeMgsY88S9LR4ZxqnKrWw9GbWbYDyMWt5uFVh2Ye3R6Zi",
  "key16": "4E2WQmBhmXXzop6SvYaJePT7vFB5ZCRX3WoeaPoLhZabq1LkXVwNAB9V4EJCPacoRzFyzu4NPXEByk8CTZbAxWf9",
  "key17": "F7mGzGk6W33aDx2uGFvEsbiDLpctCzf8rxQRsGwodLwKaHYXbeZ93Ex2ScEVJiVCVTXfLqkYXrNvSeyWed9MuCB",
  "key18": "3uP6pugJBZzJpAyVs8Uf3uTf14bftG258XmS7RNGjRcbNvUkgtYFvSLxxKd4hxc6eqXbiKNMX85xv4E8YaLGhnFQ",
  "key19": "3uPbmZwpA37ieHMCTG8mkVmPqUmMgReS64DXnqxhpPzTBYtBxhsFnk6DSPYyNk7mbYYi577cN2QiN5MLVNBD2751",
  "key20": "5jYGcqcEfhD6LpYGuAjxD53Zsh2qk8RiDDM1HcABujeg5nPnCLVjKEqeAdmPRL2DZ4zKpYSqdZ58zNDVpJCMMQ54",
  "key21": "3kQZxLFzQ8QgGuaG3dS5m1eBvAP1fyrijp7rTiWDgJSSEW6fuje9dAybDf6RGBAyCtaMfSTqco62T7SA5G8VUHcF",
  "key22": "3PT4wYfKsBRBbvLpnRcbFeYn1bVEq6vYKYrRYnxk6qVQp84dVnZ9xaeGMBiAtAcVTsGbkH765JL2S8LrBZQrJkix",
  "key23": "4eJH1gdn6m2QaVf9uAoKY24cbi4dPEHPPDR3aYRozLToLMQA1LPLj1Fe19vkNjK3kHUnzw6X8AF21ZqDejiM4saf",
  "key24": "54oMETrBp7fzz4aSY1JYvsqpmf8nAMcKWNhmZ8oGHFfdVqFvShaTgdg9xqdPKCzfnxshtGXGS9yXAmVnPhZwsyvu",
  "key25": "upgzoKtAkbhdExk1mAVXM3MUJ5iftFu5ya3LBm1XBQ1UU85oGmuWeJD8LrW2aupKjb8dLRw9tZAX1PSQpazYdLD",
  "key26": "2TV9Ub5ARNWQ7kHrdCZ4xyLHnxZzk649CMrZFiy9ioscCZNTRbdsSrbyjjdRnQNvjsHJpqbyAvzaa5uLZo6ihGz8",
  "key27": "4LxkkqZSDpg18qjK4CHSAgZ3uCGtF4VbqmBF71p2FvuWZBDPuN7ZcNKLcqVttXvg6K6fokSvs4rKssL4stb9Fxza",
  "key28": "5433UkJexAphaKUBVPVhN847nHj3wjUadbmnNHfTkzYtFqrDp3GhxoEUseELbMPF2DE2L19JU5gBvSsCjQy3Ug3m",
  "key29": "2XPu7GWLjXJ1JNdQ7jesg7FTPyBrmrWgKQmRcvNcXou2W72W67trYvDet9TwPvW4E4pJX6MfmtdczB76rREmjbUh",
  "key30": "5K6cKcJbqYxPsVN8KQDejCJXXksyu8LDU93M2tNTe5kgAYYKgU8PYKTbpmcQ81V5WiMwZaAaSebbZ7b854rs7HWt",
  "key31": "2hbYmBow9pH484mK9yQseNrigbwdYEALfcV9zKv695pcNruMyQMknCCNbjSiKrQkE7BQNkuaUrWkR6sZdPeyTWEt",
  "key32": "4e7a7nSdEH5kVmjwfTXSigz3SSuydY9tYbxZMXcexTsuivDMqbpNiCW7oV8U5AuZfk4NbKnAYrm1FXuKWxhWwaq1"
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
