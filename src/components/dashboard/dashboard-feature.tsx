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
    "4V1mcRqxt6vTNpPkXaUgZJ7GP4jcXSWQLGSVggR6PUEwQStCQsqH48gkTHwKhF69AH7MqB25nHDNykQp9kYu2Rg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqrvCMdtekHMeMsiAfyAiRhTcoVYLmo78bHgp5f35CS8ZVzMpGDRw3N8t1zZ3LC4WfznS2gMLRqcFE4XW1Z8gR1",
  "key1": "3ryvCrBPGy9brSjmPSCrvA1gUVppQrF8mmQxa25kD2dhNDMaipAkNXJnqDFC3tHr41qiF5DijfV8UTtaFJ2Xtxo",
  "key2": "5Thyo2tN4SaSmaBvgR9rHT5F2zkwWSUbWcnwfMrWVX2D9qjThyZDEgwbUytjNAwDet11d3PMQF9mTYzKe7jshDxq",
  "key3": "5Wve8FKEHH45PShoKSHjz8JFZgfczdg2g3JiU13zQkVBMeLNtRHHafmxNE961Zm7HjpUdqzt2JvXRUAbMare2kxY",
  "key4": "2cLUFGhsBXSKKmCCdvbRj8ik9DyHa18CgkS4XYEsezPMwKsEmLKW6XgADDpE8pBzzQn5xs79BKV9JfKYStingLme",
  "key5": "5wS9GiR3489ydJCDPSG2QNU6aY3S32UdGcAgKDoU7e9DfiAz5u6N45JyzSEmpo3Q77VPmuoKhhG9CN9XifEios6m",
  "key6": "3MYpAjxmcC68mcibJSvWB57H7Y2MEEWoe32rMzUongzkmoBtZzbMfrc45QnmVbCXyurNT4adjV6LVSgpFdZvNAq4",
  "key7": "5UcdGisiXHV6M6ZUvKn7UxEcM4xqsX86ND4gpARStQdoZjWExdzJpLMbv1nVojSWHGb9ca6topsZx3UU4MMVqvVz",
  "key8": "3QRKPeE6fFYh7s3My5ab1m25zjgKaFjb1WofXh8YrLq72RNcJpaMVHm46nCNpFEaEj8cNW8PLT46iCYiPqsKNzgh",
  "key9": "2ZF6rFwRURpeHhXw3GXUsNCeazqZCudsjBko7Wpf3GysdB4CvCeQYDuefxdAKu9Rzhruo2kh7Gnjp2AvbnDeJAcQ",
  "key10": "5DJKVa5dyfAbVSAvv4ew1XpJUeGNSRnG46R9VZKNwRLQt7E9KvQ5oaABaKg82X1rZnJhaPgCpkRzr5817j6Btkyu",
  "key11": "4WagF32WpVgj72y3GSVDHjfxVrLzc9H5HHzcpNxTHyf6Sc76ziKgRZ2LqvN16idiVjFm5fSWdcDPJjrnjM4ZnP7L",
  "key12": "5F2Qc4RhqHCrLxJCohgkTn3gKhxQUYay8SSaPyNG8oMJUU5NLA4tcAApHbr2t3qXkJYdJkt78y81PAsJWSyysvTi",
  "key13": "3SB55gAddszdAobHAqsyq8PhpJQoGPU4anCUCQxM39RgszpDW3XLSEa4xgfe8nXxfKYWwXfn7YRe3qs9pSiZj5tU",
  "key14": "4XVAAy3j2JhnxrCavR7NjrssA75x6McnTkMGyMHf8kdc9UPGMa4Jc86KfDd6ZtiFpLnPoXzcKc4PQvZ3ghAaxamk",
  "key15": "2S9XSbbqSXMbSKvqTjrTpRMuTm95DGMuppHhjnUL5GSC8u3NAQczDj1SyMwPaojse5frkJWJS5fEvuAc2K5fs1xA",
  "key16": "4UfxJJnuPQR8nwMsb6nkar1dCNjbTA3ye12Kc7bBpjgURekRfGSm56rK5rgFfxoPzr6D7LThFLSUkuZNTp68hrRH",
  "key17": "63ZsbqtavW9F5wzzSLeKaRfsEGKHibdjRgaWDMzDZhzTBQWZMSurGjiwCMh4mknAMEtaDUaLVuiHWhrbNpVrtbYC",
  "key18": "2BS6WMhtko79CjStLsPmx6JercFU6QGx5K1KeoaaRpR7iPyr2HEX295nYPtpfzTUon1p5dHQ7TTWysZG85hG1Gdn",
  "key19": "3Yyb77jh6nNrdJSK523e6K7YnoQQYhfYvj4YpG4GuuVbmFNZbcmaJUSieS1YtwzZ2i24KPDFwbipMCXX1cPHBv7d",
  "key20": "49MQLhWXzjcub3ZjaAPTXaQPyrPUNyBmGYLriJjCQdTvLHW43P2CKGdttwvQSpUaAbaFDmobLHyWsx1u1PA2miub",
  "key21": "2SVkMQYW3gVLogNroQKskeP9GDqaseEjKu9WUbrP1LTuLLUorJzYC3VCP5oqkPssLCkaSMeaVBAn2Mve6PtZjyUT",
  "key22": "4bgr56zNLTDG5PKytbiM1gLRPNb1ZeJdeTC7561B6wk4y8bnub9y4gNAVJ5QjzHQwDt6Xj2L1kSwfDqbueP4Jg9B",
  "key23": "4qoujimk2iX9UDhcnSzsX1xL7VmRidLJw2mpMePRAS1jWsx8ZqGhfo9xaNdmRKWA63frvadzQVJEj45W22b1UPHQ",
  "key24": "5hEmyRu5QKQw3EtbSDV8orK3nhkyGt8jRwknriHeTkMw8jALErvMuNj7RL3ztsUM1NhSBCR3yAWhDW98ZyYH3RJF",
  "key25": "4gKipdvAKUiUwzimnQue4MzeEhN9j13fG2boQAWhMZKxCM61EVb75jJBa2n1ZYfC27b6VMHfnGJDgfwqWXxFeRsp",
  "key26": "5qnQwozQKfmJbkkWKCkqrYkNgG22rbfcB8nPjzxHLzoUgEBfEt9Qu3afzUypUUTjQ4BtjeVtuVxN9jFEr94UacTG",
  "key27": "4ew1Z4eoHnsiAfV7vCix1U3UuYdt3eigp4ywW3n5nmGxehLBN2varYvFiGi7HJMHDba683NzdAY8s1tkMtZntf5o",
  "key28": "2uZBF1Bkqx94zDtC9pQN9ahfdYT49m5itB1x1rsztiSMcRJKhQmPkRT1m69mYEnCuCqF3UxoV35h5ht8StP4HS6u",
  "key29": "5xAtmEStz5Q4FYZN3nqY5j2cm2NqwLHbtAdJuyyTgNQYKyR8kXhdv49yxVSEgj1WLPuRcg7PrUrPeueqgNfjB7vW",
  "key30": "2Ft6TJh8iiqSQ7Eh6ucjypdcknmCSnZLuCc2yCXDCqzi1vSLY9fxD4b8Xt5ufcQfAxf85f9Vq72UmmvgYFk9ZESW",
  "key31": "2PwwfLX17Pdw9krK5SdUoxcJFRTXJivnzpn53nmR54eNi1YyLvyLeD9A9K5JCeJEGtfpqcuQbYffDBGPQfWHLgoA",
  "key32": "4MqFZ4279GaGcRDHMiaoKfzkSZN5uHEgrHAgu5an9QYeddTAmBmwo3Yn7pv3hCFH6gnShSfdyFoAUocEZ55berBS"
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
