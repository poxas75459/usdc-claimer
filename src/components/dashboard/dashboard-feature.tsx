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
    "63pWEtrK9VGuFFBaQq1Bh4KFXoLygEDCct13MEe4c7eZbD3nz9YoGeZPwwnmXKJ9uieSBLMyCN3CpU5KwFXyvfVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgnsZzduTKdRd77ZoHTESuXgRWPky3xLVjA8T4viVaiDRmFr3aeWaLkwjkqqsprzwdpgzCEfWRsMEM6Y9U6pkZb",
  "key1": "3mCZuS4s5p9siNwATGki1Kzq7x9yre6kHbHZ4y4ZgsbANsUKQ1c6rHpMyWrum6bpgb4gz6tSkLFAM9zpv1CcqHoH",
  "key2": "2rX44LYttSECh7zSfCUTLGzJBdENuFTFwCPNY8U9X8va4srWfiHxzV7FUVD8PYTxtCpMU81hbtkqxinSWtiRLrHM",
  "key3": "3JS88N4EqnFGthTG3mUfGgesXAJJ8qp1KZ6EnM41XXK7ZSRQSMHxsR1iQg6hP5JoKqTgKF1vvwcFxHSTFDx5ik8f",
  "key4": "4BT65WYkfhPaeaUiE4v4DXAHobwW82KKTefDSLsETzDYucaqZrzeNeUQoQqw7wCBAFoJjzkAjeKA86bQpSsnABAn",
  "key5": "36DGJVMS76JN7Mgor6qECdqRs7zAAMDiphyetSwo7z4Ax9MG5byjmf5qAYw76DexJBreSdhNCFQpFM2f9xjahPw",
  "key6": "4gkHk6myvRMy2yk23tUiPz2BnrjL9DUZKnChH3SNCs7iqdn3yFFNRUpyqgywWEkqJYjGAS4gYMmWsMXkcDV5kWZn",
  "key7": "FYeELxZ4bucAz1u2yyBMogi267zT7rvxrQYovAJNTW2jpvWHiPWDJ6uuvBSC2bGDusWhe7FVnZ63WDgAeLfB4Eu",
  "key8": "Yo1QrBE1nFfFHpHHRE7r48LMwRqxBLe6SE9EYzP8LWF4ohsGnjtp1YENZCHizrHWTsnCtHvWa8L7TPB7ytWExiQ",
  "key9": "3RCx2ynYdbL2FTKfDKwyWzFvJKHYFLXjQCxwWz5DLQ4iQcgLfpDgeMN4tdCK32LKKpAM4pChxZLQzE5BgXxqPzae",
  "key10": "26XgugRojL7iTWqWp2AaKHvtX4XBLRXrtANztiBNtU9SyEBZmtoMEDB5KuW4xDwoxGabmDMcA4zco9MbqeTa7PhY",
  "key11": "4dZLxubX6yFsSSzkyL9q6XxYsKXHrwXJELkJffzB6YmdoqH36JY8fppKbxEpfmdga7U5XdkXN5U9VagnyRQ19Bja",
  "key12": "4NRpWKYvqyrGz5YSi2QihB9AiLeuRULbXoe9QP6mdBfKbnKyZHmKbX7Y9RsaXUzD6gZARRfdaMejKrF9VdS428wZ",
  "key13": "5MDeDad7HMCYJ7CnE5qwWfka5GdrVMjPpeDLgVnpjaRFjLaqtxfAPYqZ8BrAcf1j5BwqGsYPuAxFftxuW5XfX1L6",
  "key14": "5CCgRc5ffRZ45bp9gDSpaHt8tmiArjs5G1YQNqYX6Z3cVbWHHQqk6RLYbB5QdVEh8zKTBpXXdnf3tacSbRybBLkF",
  "key15": "2PSh8svru8pL4XsDMbSA99wgEzgKdHhHmHnEofmBrSth57jKHPPUTgKheadEafqwSD3yHdLLLSnxQXnVkoweisca",
  "key16": "23suHR77VgFr5HVKvCFFwkhhqLYaQY9y64mYPVU8upVN6HPeSog5v2ous2o7jPnpoiueDqYrvWnGS3XZNX5TSqkc",
  "key17": "28UG91xMeU3Pc6MYyxupHEJfM5uLu8s4sBzPGbr9xuQ5Awe61dV9zngY6vANz1YjsiLr9itfExwDGzRGD9HqUzRw",
  "key18": "3KRw435mZZn3wJbYtdAtLNDwHaYaD4zAAF1hS8niTcmgsDKNFSwX9UrFRYmYJ2RoAJExhUUoXuh5hizkQsL4L4Vd",
  "key19": "4oteTh4WQjj8xyvBtNya3wCw1vjkZJ1VkjgW9Yknfi8CL5LpvtPhsmLrDAC1Nq6CBEdgngsgcgWSN6vMu9tFKFbL",
  "key20": "2RSMpAhNNzs9VoxtfgHauwvCacCHM8G7WDaoHmaKLxoBUs559dc5nhatnpjTS16PcpkLan7Mpo3kLVVAdV2ALZYo",
  "key21": "4fGYNVCiMa8T5fz5BgRoc59YM6EvLV12RBVxxCR69Ec4WY3aH5qQxVwkJJSUmrrCp8S5jBefRrB9gD13cR9H8rQc",
  "key22": "2bMSpifMhAah1AKqDyPtUQum9zESnPJvDugCwnmrPs3wWH5nbMhUS1KGGnZNEnYtoGJWfMTYS4fHvZF43L3eSje1",
  "key23": "8ygvetgvih1N6gtBjM4vHpd97CEhyFPyNyNwBBiwQPMJpUg6U8ni8Eg5Ey3tjrDwSHphooQpoF6SrkCTnRxs42B",
  "key24": "4UbapZL6EaB72kFPWXCzoXXVBwdtReTWVbcqQZdmoCu5YXf1B3V8Y6V2xFkTqQ8rU7mkH8HLJPiRTURetntDJcS1",
  "key25": "3kuqrruNPjCnjYy2p7VLwTSNzC8WZ9jXJvdoEb8TzeUdmbYfmTszP6t4S3fKckhj28GgXD2JdrDSfaEJAmzGpsWp",
  "key26": "3vV6Xn6ZTP6zKSmVBV752ebk6bRvLV4MzoSyGsr13DxtX8kimSyDLTgXvm9WrZhdRLrZUQWxdFcPba5EzmjhJdXk",
  "key27": "3TFSatDfJWZJ7AGimEHcKRvtcW7kZo86C3roTN9bdju2WnzpiXuXhop1vLxDVrbSSfZc4d84tQ8hQrjuQcJxZTno",
  "key28": "5y5DfNSckKoVsZQUD9frwBpQedLuoCbBBu5SfT3LWeAPKi2Hab3CTD7cD3JFSpB8gzGLHe4xAtNPmMYkHXf7XfKS",
  "key29": "5WCfLgwMNHLyCPh7eds7VrvxTmGPUVG6Gh7H8iCHNW4AskbqEoo6HfvS5nyMra6TcaPoXU8efiTuJEancoweA9bb",
  "key30": "2L9cKADbNrFjHMDc35iUpzhexqEZvkgPh4NSBR5CVfByGwxQyJ7unJaqCpDeyndU6JxbpUw5QPhmK1wYRm3HT8gp",
  "key31": "2AZo7ihECMpidyFk8UoXvb1YmUFandEvv31NpWoGkSJSJ5ZAJ4pmCnf9vC92NZbK1b6WucQ79W1Vr3cxH1VoQvcy",
  "key32": "4wMmpDA2R2pTSemuJ32ezuoK1XecazcAV5SHk7PJ8SQwU3thEMhjyH7L12Nsk35T7zc2GHhiuAjsY3NbRnGWVybE",
  "key33": "3NA6EfXEgMsGzziLTo9PXfzw2K7J9ogj2FoBc4LrcxMPFuh7QvwthQhof52t3REJPsZqmGH6okAwHXM1nVpD3KfV",
  "key34": "24gm6tBjKdAa4L4dArjc4KoHEnS5KFfnFEFYUudKADVEMXfB9zsXC6D9Sx8qQjRXPYftE2mEMunbrnuXq7KSC2tq",
  "key35": "644epLiGnQsnLio9mRugUgqpm8Vbo9s8hbXeRCCGo5pWx3unqLj8GsH1TibMyEpuyiC7aUprz6JVWne3sCRDqM1e",
  "key36": "3t1K823dpawVSdnqcgupoMQKzCdKJMEhYdBU5zaMZV2cKXRThcbMeNiGXorVjkbtHD4Sq1U6sAMeYfmVbcmcHjDL",
  "key37": "4pzJhUqovCfJtVV4WuiofS7Nfs2cbPegK7d3c9M8LCeYWtPmgRRhQhH8kS7Cit7h9CvF1aeB8StVzU5Jx62zFYb4",
  "key38": "21XJtWcikqjGNWDBFirJ8nNjDvmLLUYsNwkyHuR7vKAqPufiBD9sS3StVYY53EJk2VzJH2doFRDVBkfJXtRx9Bti",
  "key39": "2VRJWkS4ygUvKcQ1uUS8WNCxDf2gHpU8A48mpz5Z9QJNYXfAuxZSTTrHiZ3h4KKPMWGvXnnMhfUR9wgKNTsZ9kyw",
  "key40": "cvYXZdFStzn6jzdq76yd1XCKtDVkB5kGL4xKKJwBDkyTNS6WLAHuroBhKggBL7tCreTZQ5RZEzUes5Ay2p93Wci",
  "key41": "5QAyLoqtzgxG2PYeZrdEGi4K424fsK7z2v2CyUijtHMJLNZ8nmU3FubLGpi9uptBr131Aj3SXXh31VeKgY3ZUB8S",
  "key42": "1grYiVaPpbn6kB5Fd4ZojwzvxRznNvA4witPCoCs5iooVFcFzpATMa3o4RRvQgySCY6PQ1ZVobEstbyCt58yoL1",
  "key43": "4RAdfyuCPDyAGgf1baYwuJAZPWFQyQVhWHbnzskygbcWXdV9x9VwkjV1TAwEASsSwgMNRnvV9TdC5XB3MBPwvxvg",
  "key44": "67mn2R2BMKfozpBQ9nq4LsVwfCNekpybfsQgS5jnRNFDxUYxFWz1nUZbWStpy2Loi5fTxrtZiwJ3PHTNxmYPsVAs",
  "key45": "2iHHGzEPvbHhtRgNJnSTCswK5BmiZpbL8UEM2X1QpXXkPCzQPq7v6fXgQ5K73QVFLeayHPfHxFh8bdxPsZ5GYw1w"
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
