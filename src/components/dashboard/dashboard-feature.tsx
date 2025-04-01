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
    "4f4aynwRPF7c5pTbHt4HyRs3MVk4sgBse4em1ncSKW2mZN2e9nEPsRYEhyiZMMUc1bbgQQb75a57YDsDqfbECMN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCvk3PfTnj2mdBBpZNwpze9KBXbSGERsMCrjB3Pk3N2dtEfaYNtw3ASVCniSm9JDBxokymNR1xqKpkk1Md1CKVo",
  "key1": "4Frn7AKKsNVqBv3EYHaZDbbJ45CugGuSrTgYe8L44SeZAp4X1B9jRywGqcHZ82S67xY43HGTiA95Ej7Hu5q2dyN6",
  "key2": "3QAop8pgPzujD3ZWdy73kXeAkSqiKkFV9t1qbZbRSNja59g1twCYVM8NWAYo8vDiayCrmp2DBQM4CeoQugz48tb",
  "key3": "2nhxPpbsS2tf1oH92VPRX3p9kh76QLETkDoTgTYvE82jpvqVEvk1ytbqKWfKfkcUjj3ZBwjFHn17KW2tg9HHEDR5",
  "key4": "36kG4fAwaWhWoFZw3Zb3TRGYF9y9a144s6ygcGtwJhzVdMgyMCGRL7wtiJdoxwfpLVNDkemNm1Vu1KDP71hL8wnY",
  "key5": "3JxHxd85anC3m4k9bQPboTQxiB8SUe6jUdgBjQKHY6xy5nk25xKbFtqvivLcq8vLD2dXi2xhuujWpHC673rgB1zr",
  "key6": "5uwV6S2TecSTim2PZACnpgG3UoqeA8E19fZhpUPwq5VKA72mgwBhL5thdqh3ShJ4ypE8nJaULj7rbL3BWFA3AHD9",
  "key7": "2ufeX3ju7cuWXZwYGLPNKZwfEbK9P7dcy6aZMYB9GGCkwchqYdz53d53sfxb9N4vxMFCjtYmhftGfzB7LtguAJab",
  "key8": "4WB7pa9RDvfGy2UZHUiszMg7kicDS7zwxkUPW4HKm1nsDTPGXtjKaZGPHzQZpLZG48YrGhjSKjztxxy8yiZUv1g4",
  "key9": "x9RJ9xdbKEWmeuYfH4poiBXYWeH8JDrjyJmXSkqbnS8Nx1fEwUE1KboPVQN516U2NHJpYvXMn7B16Q7muXrYuLF",
  "key10": "2TTtF66MZUvP4ZJjrHxZy3DodcRe3sXZZ665B6JUujA3oQWCLKErsdfKKFLFsQ1yjZLTHRkA1KQjNESFvcjhBT91",
  "key11": "2ntPPjwrkH5Uv9q4PDHfsNZUAjqGCoNfRj42w2QD4scpgoKGLbxuLJxAHuJyyM38V55tRrJt8iCHgPudiXggmDHo",
  "key12": "4u8mqzpeSkekoMLox2TnY1JUbv2GgH3GGFJD68u4hnqmVHRhrYaJSN152GFe2qPd5dfkihryPyQwhmjtgiNNUZxw",
  "key13": "27Ru9k2RzEtu1py6B7tBjNgD2aT7jpDB3JjDjQzwQeGh8A2XGCd2bgMAoZ6SZpoz2fdGLU4n9GaBaPJjjyfoF2Ky",
  "key14": "33k8Uey8pBTonPY5La6Tk1JJC6GURHxcpjyrRX8rtnqmi16YockRoL2AWZekDAu5G7DogVX9UzdmCUMKWN5EqugU",
  "key15": "2GFR7zUYEYo3VVpbaAUMaTcoNahzJbmLPmyJAf7oYkA6GyETQrpyvfpM9zVakKF1RoyjqYodAzoAfyHM5R6iiuef",
  "key16": "1pTvaDLrxLS1hd14x6Z7FuNXuYXWG8aouJQehxKDKjP5b9cC3cHMSemN69D3LZ8WC8s89kMKtYRAoN4Fmrtxgs8",
  "key17": "3fR1bSnDh9nCuxFiQK3yMkJAWsvVYa7Txyj212QP7GjVa9MTq177xjUaPogCW8TGNJreyvSxeAm2EmSMCPfHmEME",
  "key18": "5zQ8mcUf248GtD2yMsrTxcE7oHftSj1r4qjbUVaDmcV9vWTdnMEEeai6YSKz568yuGifXhNDGNJC5o61cconXUDD",
  "key19": "512cHmErR82bAmL3Eq7doQPQDBwtCrwoGbPVWqAMfPbZ5fXoJW2ZKiwRpXWEyY5hrHUWtAepuXULbjWZ6AfEMn6Q",
  "key20": "Y1fYfN7nyVq8KcUR8vqkqSSjS4GhzmPTi8GA5VMHA8JJVEKF8bTKMaizfgeTXxr8g3GnAiLoNkqYrZvu3G8qFEx",
  "key21": "4KiVKWPzyq6iGfwLfFZQVywuDG2FtCebHJsRuPhyZJHnwe61VPugevaxZci2N3UnS26pvAzC6rx7Z8xcPYrbrA3h",
  "key22": "5NfsAX9vsimBtkRA6hp5EbKhPWjvKGxGgj9cxmyu7jWpNzYzkvo3Gp9QzjsA6bN9WERStJTz2sknWemWXPq4LWz5",
  "key23": "5WeTUzuSGvXjDFwBot9kYopJ99wMXoj9tt3kRGMdDd5UUuy347z3JjH8ErgbKwhGNj1tKfUEubC8JX3FFVdk139F",
  "key24": "2dErNbjpnLaMjr4E7KPEic12Yg6jBeV89afZjc2MTHjGWigvyaZ5MfCYX6NxZBXouEwDKoGnihJweoucbrkXnQ6q",
  "key25": "3rgbeSHsSQxBEEXd3VrNrzU1ar5VectchZAPG9ABc9D7aqdrh1Px2XobYeTGukYK8bRxbKQrPrP6oMez3brMKE7S",
  "key26": "61p9ew5gLHTg8mUZbxt3tCNUVBeqPZUx2ZYAPdxc6xKuRq9Q55apCuZhZWgHmDc76q2fdqfkCm4TXSXWV9s1VGd9",
  "key27": "3fkqZXreH1xNpB6yk9DGRxEGjZhM358Aw41xQkSM14fPDDdCxjSVsx5ozFbcyv9cGMFXBWcz4MZ951AfUx8KMTw8",
  "key28": "2MNPupa145dpou55GHdxsyX8n2qSLZ1jQZPtP3roDnemB6i2xPbvEfqmnyJP8mxkPUDTE4ujoz5FTMNjE9nPbDbw",
  "key29": "2ds5BYMKCPzXiqUT3yGXqK6B3qh5RpHdbevd2JFWyuPDywMtw42fZqPVDPgSkTFB62ViCcM6HtS1S9XMBnHrZ3wb",
  "key30": "3Nsg2qAgnXSrtsNJGNB57pepX7rUH8ksEMXxaHNUt5KHfbe5VSviCJEp4cwcb68Sb5vam5nwWcJdX3cLFA56sQTB",
  "key31": "4bdxDEYZtdYzYpoXBmnaVUXZcWAAXCzSVghwmxx1jvaJ5XJZfNj66TDbm6gsdaiT6YYy7RAAAi6dg6QPRt1rcXUE",
  "key32": "TQ6LmHXcfN9eExiGGE36afQcvcvKL9hmev7pUc7Cn1q6fY8dKoucXE5u8a2rANXUtQpFrfztW3T1fMeuweRvgLs",
  "key33": "47NkSTEK9bApi8ymqM6ryHrYDLTtbMoDoPx5rWxxg1YbY5cKybFpxM3otF1oPFciBagWNxeJ29frXYoGcoiezhZQ",
  "key34": "38P8GrpEjUJDR5KhrhgrK4Py9Ux7jtQFt758uHB171qhDHkiuo6hkAmakN9fWBU9LfYZgR4jjw4J7oSwP5nF1BvQ",
  "key35": "582TtUPJ48kz3vLJfC6Nt1KjFkeLZShqW4WQdoTbHaVMB14VvpjNPXWVVB3CLiCL6TYq4AkVBLuxhg2DznS4GDP8",
  "key36": "5ddoRXdrc6Wsix861ogrJPuB1Tmm75hJwFcMkFdL2HWMsb6bc2EwoqoS95eHHvareWtQJht4ZTKrJ3vjYuLv818x",
  "key37": "4unAeaBALomiSqUagTeazayZqoXVZRbxtqcAdhKyTaNz2VSqu5Ldi3grNbyWK4yWHS9764YtGHQPy4YWApxYHz6m",
  "key38": "66aUqNYUADKvLBVeuRn347zkH9kDndZYDmqW3PtSpuXZUutuwguhTjfg2GRa3j1aMd3XVWAXCy8Z1tLYEro7SyVs",
  "key39": "uSifhhE5WdXZLsZfKSMFpHt7WooNvx2HF1D8dPPZa7wFcGdoEramxuKQhKeLJeifqD7ZLUZ6BvgGKSV4AAmXHBQ",
  "key40": "5hxxiECeqAYzs3SufWPsyiMCKCipQ81a4k8rT3m76yeKt9eEzFhdxfQwK2fvuWSrC4S9uGRTYzoX7jEjU3hi68HR",
  "key41": "36qu7YufkgASATGze52cd1MFWt2mvKNrsCVA9q9NuyLCY6hbQcnY7bG3dRN4kAQDG8YnnPkWr87nyEHR9kRNiUW8",
  "key42": "k4bwmEAecgtCs2YobYmwJZX5B1BAJXotpSjY9wWumnaxruc1Z1P7kGGu7LzdUuWXabHb5FvwxKozsLEV7ZUkWQM",
  "key43": "51ABizuTPKh1jJJNbW4hH6NzqcxnSffz6DDjU6toM2nBt1qeQ6n7KK1aebieZ5Gq9Wg7ZKZoxHQKv5Ug5MMuL1bZ"
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
